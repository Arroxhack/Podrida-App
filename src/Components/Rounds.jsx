import React from 'react'

export default function Rounds({playersNumber}) {

    const TriunfoUno = [];
    const sinTriunfo = [];
    const TriunfoDos = [];
    // const playerColumns = [];
    for(let i = 0; i < playersNumber; i++){
        TriunfoUno.push(<p className='h-6' key={i}>Triunfo {i+1}</p>)
        sinTriunfo.push(<p className='h-6' key={i+10}>S/Triunfo {playersNumber}</p>)
        TriunfoDos.push(<p className='h-6' key={i+20}>Triunfo {playersNumber-i}</p>)

        // playerColumns.push(<PlayerColumn playersNumber={playersNumber} key={i}/>)
    }

    return (
    <div className='flex flex-col p-2 space-y-4 text-center border-2 border-black'>
        <p className='h-6'>Rounds:</p>
        {TriunfoUno}
        {sinTriunfo}
        {TriunfoDos}
        <p className='h-6'>Total Points </p>
    </div>
    )
}
