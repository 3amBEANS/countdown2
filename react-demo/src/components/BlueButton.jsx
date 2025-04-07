import React from 'react'
import '../styles/bluebutton.css';

const [count, setCount] = useState(0)

function incrementCounter(){
    setCount(count => count + 1);
}

const bluebutton = () => {
  return (
    <div><button className='bluebutton' onClick={incrementCounter()}>Blue Button</button>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default bluebutton