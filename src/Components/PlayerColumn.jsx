import React, {useState} from 'react';

export default function PlayerColumn({playersNumber}) {

  // console.log("Rounds: ", playersNumber);

    const [addPoints, setAddPoints] = useState(0);
    const [points, setPoints] = useState(0);

    let handleChange = (e) => {
      e.preventDefault();
      setAddPoints(e.target.value);
    } 

    let handleClick = (e) => {
      e.preventDefault();
      setPoints((points) => points + parseInt(addPoints));
      setAddPoints(0);
    }

    const rounds = [];
    for(let i = 0; i < playersNumber*3; i++){
      rounds.push(
      <div className='flex justify-evenly h-6' key={i}>
        <form className='flex mx-2 space-x-2'>
          <label>Round {i+1}</label>
          <input 
          type="number"
          onChange={handleChange}
          className="w-12 box-border border-2 border-black"
          />
          <button 
          onClick={handleClick}
          className='border-2 border-black'>
            ✓
          </button>
        </form>
      </div>)
    }

    console.log("Rounds: ", rounds[0])


  return (
    <div className='flex flex-col p-2 space-y-4 text-center border-2 border-black'>
      <div className='h-6'>
        <label>Name: </label>
        <input 
        type="text" 
        className='inline w-24 text-center box-border border-2 border-black'
        />
      </div>
      {rounds}
      <p className='h-6'>Total: {points} {/* + {addPoints} */}</p>
    </div>
  )
}
