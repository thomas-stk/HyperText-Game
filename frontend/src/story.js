import storyData from "./storyData";

function Story({ page, setPage, set_opponent, setClass, curOptions }){
  return (
          <>

          <div className='flex-1'></div>
          
          <div className='flex flex-col items-center justify-center mt-10 mb-10 p-5 w-full '>
          
          <div className='flex flex-col text-center mb-2 px-10 bg-zinc-800 shadow-lg w-1/2 rounded-lg px-2'>

            <p className='text-white text-lg mt-10 mb-5  font-semibold rounded-lg'>{storyData[page]["Story"]}</p>
            <div className='flex flex-row justify-center gap-8 flex-col mb-10 items-center'>
              {curOptions
                ? curOptions.map(option => (
                    option.length === 4 ? (
                      <div className='flex flex-col bg-zinc-800 text-sm outline-1 outline-gray-50 m-5 outline-offset-2 rounded-md'>
                        <button className='transition delay-100 outline-1 py-2 duration-300 ease-in-out hover:-translate-y-1 text-white font-semibold text-l cursor-pointer rounded-md hover:bg-zinc-950 bg-zinc-900' onClick={() => {
                          
                          setClass(option[3]);
                          setPage(option[1]);
                          
                        }}
                        >
                          {option[0]}
                        </button>
                        <p className='text-stone-400 font-semibold'>{option[2]}</p>
                      </div>
                    ) :
                    option.length === 3 ? (
                      <div className='flex flex-col bg-zinc-700 text-sm outline-1 outline-gray-50  m-5 outline-offset-2 rounded-md'>
                        <button className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1 text-white font-semibold text-l cursor-pointer rounded-md hover:bg-green-700' onClick={() => {
                          const nextPage = storyData[option[1]];
                          setPage(option[1]);
                          
                         
                        }}
                        >

                          {option[0]}
                        </button>
                        <p className='text-stone-400 font-semibold'>{option[2]}</p>
                      </div>
                    ) : (
                      
                        <button className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1 text-white rounded-sm mt-5 outline-1 p-2 outline-gray-50 cursor-pointer hover:bg-green-700 font-semibold'  onClick={() => setPage(option[1])}>
                          {option[0]}
                        </button>
                      
                    )
                  ))
                : <p className='outline-1 outline-gray-50 outline-offset-2'></p>}
            </div>
          </div>


          
          </div>
        
      </>     
       
  )};

export default Story;