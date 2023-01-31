import React from 'react'

export default function Rounds({playersNumber}) {

    let rounds = Math.floor(52/playersNumber);


    const TriunfoUno = [];
    const sinTriunfo = [];
    const TriunfoDos = [];
    // const playerColumns = [];
    for(let i = 0; i < rounds; i++){
        TriunfoUno.push(<p className='h-6' key={i}>Triunfo {i+1}</p>)
        if(i < playersNumber){
            sinTriunfo.push(<p className='h-6' key={i+100}>S/Triunfo {rounds}</p>)
        }
        TriunfoDos.push(<p className='h-6' key={i+200}>Triunfo {rounds-i}</p>)
        // playerColumns.push(<PlayerColumn playersNumber={playersNumber} key={i}/>)
    }


    return (
    <div className='flex flex-col p-2 space-y-6 text-center border-2 border-black'>
        <p className='h-6'>Rounds:</p>
        {TriunfoUno}
        {sinTriunfo}
        {TriunfoDos}
        <p className='h-6'>Total Points </p>
    </div>
    )
}
