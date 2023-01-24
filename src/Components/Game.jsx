import React from 'react';
import PlayerColumn from './PlayerColumn';
import Rounds from './Rounds';

export default function Game({playersNumber}) {

    // console.log("playersNumber: ", playersNumber);

    const playerColumns = [];
    for(let i = 0; i < playersNumber; i++){
        playerColumns.push(<PlayerColumn playersNumber={playersNumber} key={i}/>)
    }

    return (
    <div className='flex flex-col space-y-6 mt-4'>
        <p className='text-center text-3xl'>Score Board</p> 
        <div className='flex p-2 text-lg border-4 border-red-700'>
            {/* Rounds */}
            <div className='w-1/12'>
                <Rounds playersNumber = {playersNumber}/>
            </div>
            {/* playerColumns */}
            <div className='flex justify-evenly w-11/12'>
                {playerColumns}
            </div>
        </div>
    </div>
    )
}
