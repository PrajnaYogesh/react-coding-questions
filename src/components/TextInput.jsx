import React,{useState} from 'react'

const TextInput = ()=>{

    const[data,setData] = useState('');

function handleChange(e){
    setData(e.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    alert(`current value is ${data}`)
}

    return (
        <>
<input type="text" value={data} onChange={handleChange}  />
<button  onClick={handleSubmit}>Submit</button>

        </>
    )
}

export default TextInput;