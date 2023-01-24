import React, { useState } from 'react';
import Game from './Game';

export default function Players() {

    const [playersNumber, setPlayersNumber ] = useState(0);

    let handleChange = (e) => {
        e.preventDefault();
        setPlayersNumber(e.target.value);
    } 

    return (
    <div className='p-10 min-h-screen bg-blue-300 text-black'>
        <label className='text-xl'>Number of Players: </label>
        <input 
        type="number"
        value={playersNumber}
        onChange = {handleChange}
        className='w-12 border-2 border-black text-center'
        />
    <Game playersNumber = {playersNumber}/>
    </div>
    )
}
