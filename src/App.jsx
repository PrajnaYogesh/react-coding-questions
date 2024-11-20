import './App.css'
import ReUsableButton from './components/ReUsableButton'
import TextInput from './components/TextInput'
import ToggleComponet from './components/ToggleComponet'

function App() {
  
function handleClick(){
  console.log("button is clicked")
}

  return (
    <>
    <h1> Controlled component</h1>
      <TextInput />

      <h1>Toggle component</h1>
      <ToggleComponet />

      <h1>Button Component</h1>
      <ReUsableButton text={"Login"} handleClick={handleClick} />
   

    </>
  )
}

export default App
