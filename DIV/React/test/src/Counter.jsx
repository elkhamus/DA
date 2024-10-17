import React, { useState } from 'react'

function Counter() {
    const [change, setChange] = useState(0)
  return (
    <div className='counter'>
        <h1>{change}</h1>
        <div>
            <button onClick={()=> setChange(change > 0 ? change - 1 : change)}>-</button>
            <button onClick={()=> setChange(0)}>0</button>
            <button onClick={()=> setChange(change + 1)}>+</button>
        </div>
    </div>
  )
}

export default Counter