import { useState, useEffect } from 'react';
import Player from './Player';
import Story from './story';
import Fight from './FightPage';
import storyData from './storyData';  
import Moves from './moves';

function App() {
  const [playerClass, setClass] = useState(new Player("Custodian", 100, "Fist", [Moves.punch, Moves.block]));
  const [page, setPage] = useState("p1");
  const [opponent, set_opponent] = useState(null);
  const curOptions = storyData[page]["Options"];


  useEffect(() => {
    const curPage = storyData[page];
    if (curPage.isFight) set_opponent(curPage.opponent);
    else set_opponent(null);
  }, [page]);


  useEffect(() => {
    if (playerClass.health <= 0) {
      setPage("d1");
      setClass(new Player("Custodian", 100, 100, "Fist", [Moves.punch, Moves.block]));

    };
   
  }, [page, playerClass]);

  useEffect(() => {
    if (page === "p1") {
      // setClass(
      //   new Player(
      //   playerClass.name,
      //   playerClass.health,
      //   playerClass.maxhealth,
      //   playerClass.weapon,
      //   playerClass.moves
        playerClass.health = playerClass.maxhealth
      
    ;
    set_opponent(null);
    }
  }, [page]);


  return (
        

      
      <header className="min-h-screen flex flex-col justify-between text-white">
        

          
          <div className="flex justify-center mt-5 text-white text-3xl font-bold">
            <h1>SPACE HULK: SOLAR WATCH</h1>
          </div>

          

              {storyData[page].isFight ? (
                opponent ? (
                  <Fight
                  playerClass={playerClass}
                  opponent={opponent}
                  setClass={setClass}
                  set_opponent={set_opponent}
                  setPage={setPage}
                  page={page}
                />
                ) : (
                  <div className="flex justify-center items-center w-full h-full mb-10">
                    <p className="text-white text-2xl font-semibold">Loading Fight...</p>
                  </div>
                )
                
              ) : (
                <Story page={page}
                      setPage={setPage}
                      set_opponent={set_opponent}
                      curOptions={curOptions} 
                      setClass={setClass}
                      />
              )}


            
      
                 
      </header> 
      
  );
}

export default App;
