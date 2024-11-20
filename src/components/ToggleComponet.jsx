import React,{useState} from 'react'
import ShowChild from './ShowChild';

function ToggleComponet() {
    const [isVisible,setIsVisible] = useState(true);

    function handleClick(){
        setIsVisible(!isVisible);
    }

  return (
    <div>
        <button onClick={handleClick}> {isVisible ? 'Hide' : 'Show'} </button>

        {isVisible && <ShowChild /> }
    </div>
  )
}

export default ToggleComponet