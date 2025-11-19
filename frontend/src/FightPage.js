import storyData from "./storyData";
import Opponent from "./opponent";
import Player from "./Player";
import { useEffect, useState } from "react";

function Fight ({ playerClass, opponent, setClass, set_opponent, setPage,page }) {
    const [curTurn, setCurTurn] = useState(0);
    const [curOppIndex, setCurOppIndex] = useState(0);
    const [curOpp, setCurOpp] = useState(null)
    const [oppMoveName, setOppMove] = useState(null)

  useEffect(() => {
    if (opponent && opponent.length > 0) {
      setCurOppIndex(0);
      setCurOpp(opponent[0]);
      setCurTurn(0);
    }
    else set_opponent(null);
  }, [page, set_opponent]);

    if (!opponent) return <p>Loading Fight...</p>;
        

    function handleAction(attacker, defender, move) {
  
      // Do player move
        move.execute(attacker, defender) 

        // Determine opponent move
        if (defender.health > 0) {
          const oppMove = defender.moveSeq[curTurn % defender.moveSeq.length];
          console.log(curTurn)
          console.log(defender.moveSeq.length)
          console.log(curTurn % defender.moveSeq.length)
          setTimeout(() => {
              oppMove.execute(attacker, defender)
              setOppMove(oppMove.name)
          }, 500)
        }

       setCurTurn(curTurn + 1);

        // Update entity details
        setClass(new Player(attacker.name, attacker.health, attacker.maxhealth, attacker.weapon, attacker.moves));


        const updatedOpponents = [...opponent]
        updatedOpponents[curOppIndex] = new Opponent(defender.name, defender.health, defender.maxhealth, defender.moveSeq);
        set_opponent(updatedOpponents);

        if (defender.health <= 0) {
          const nextIndex = curOppIndex + 1;

          if (nextIndex < updatedOpponents.length) {
            setCurOppIndex(nextIndex);
            setCurOpp(updatedOpponents[nextIndex]);
            setCurTurn(0);
          } else {
            setCurOpp(null);
            set_opponent(null);

            const nextPage = storyData[page].Options[0][1];
            setPage(nextPage)
          }
          
        }


    }
        const playerStyle = {width: `${(playerClass.health/playerClass.maxhealth)*100}%`,};
        const enemyStyle = {width: `${(curOpp?.health/curOpp?.maxhealth)*100}%`,};
        console.log(playerClass)

    return (
        <>
        
        <div className='flex-1 flex flex-row gap-10  mt-10 justify-center px-10'>
          <img className='w-1/4 h-100' src={playerClass.name + '.jpg'}></img>
          <img  className='w-1/4 h-100' src={curOpp?.name + '.jpg'}></img>
        </div>

        <div className="flex justify-center items-center mt-10 mb-10 p-5 w-full">
          <div className="flex flex-col text-center mb-2 px-10 bg-zinc-800 shadow-lg w-1/2 max-w-full rounded-lg px-2">
            
            {(curOpp?.health <= 0 ) ?
            <>             
            <p className="text-white text-lg mt-10 mb-5  font-semibold rounded-lg">
              {playerClass.name} VS {curOpp?.name}
            </p>
            <div className="w-full gap-40 flex flex-row justify-center items-center mb-3">
              <div className="w-1/3 bg-red-500 rounded-md">
                  <div className="bg-blue-500 rounded-md" style={playerStyle}>{playerClass.health}</div>
              </div>
              <div className="w-1/3 bg-red-500 rounded-md">
                  <p></p>
              </div>
            </div>
            </>
            :
            <>
            <p className="text-white text-lg mt-10 mb-5  font-semibold rounded-lg">
              {playerClass.name} VS {curOpp?.name}
            </p>
            <div className="w-full gap-40 flex flex-row justify-center items-center mb-3">
              <div className="w-1/3 bg-red-500 rounded-md">
                  <div className="bg-blue-500 rounded-md" style={playerStyle}>{playerClass.health}</div>
              </div>
              <div className="w-1/3 bg-red-500 rounded-md">
                  <div className="bg-blue-500 rounded-md" style={enemyStyle}>{curOpp?.health}</div>
              </div>
            </div>
            </>
            }
            {oppMoveName ? (
              <>
              <p className="font-semibold text-red-500">{curOpp.name}<p className="font-semibold text-white">used</p></p><p className="italic text-teal-400 ">`{oppMoveName}`</p>
              </>
            ) : (
            
            <p></p>
            
            )}
            <div className='flex flex-row justify-center gap-8 flex-col mb-10 items-center'>
              {(curOpp && curOpp.health <= 0 ) 
              ? 
              <button className='text-white font-semibold text-l cursor-pointer outline-1 px-3 py-2 m-5 outline-gray-50 outline-offset-2 rounded-md hover:bg-green-500' onClick={() => setPage(storyData[page]["Options"][0][1])}>End Fight</button>
              
              :   
              playerClass.moves.map((move, index) => (
                <button className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1  text-white font-semibold outline-1 px-3 py-2 outline-gray-50  m-5 outline-offset-2 rounded-md text-l cursor-pointer rounded-md hover:bg-green-700' key={index} onClick={() => handleAction(playerClass, curOpp, move)}>
                  {move.name}
              </button>
              ))}
            </div>
          </div>    
        </div>
        </>
    )
};
export default Fight;