import React, { useState } from 'react';
import Game from './Game';

export default function Players() {

    const [playersNumber, setPlayersNumber ] = useState(1);
    const [totalRounds, setTotalRounds ] = useState(1);
    
    let handleChange = (e) => {
        e.preventDefault();
        if(e.target.value <= 7 && e.target.value > 0){
            setPlayersNumber(Number(e.target.value));
            setTotalRounds(Math.floor(52/e.target.value)*2 + Number(e.target.value))
        } else {
            alert("Primer version: Numero de jugadores entre 1 y 7 XD") 
        }

    } 

    return (
    <div className='p-10 min-h-screen bg-blue-300 text-black'>
        <label className='text-xl font-bold'>Number of Players: </label>
        <input 
        type="number"
        value={playersNumber}
        onChange = {handleChange}
        className='w-12 border-2 border-black text-center'
        />
    <Game playersNumber = {playersNumber} totalRounds = {totalRounds}/>
    </div>
    )
}
