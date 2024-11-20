import React from 'react'

function ReUsableButton({text,handleClick}) {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}

export default ReUsableButton