import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//This is a stateful component
const DogButton = () => {
  const [dogCount, setDogCount] = useState(4);
  //setdogcoiubt is a function
  
  const handleDogCount = () => {
    setDogCount(dogCount + 1);
  };
  
  return <button onClick={handleDogCount}>{dogCount} stateful dogs</button>
}



//This is a stateless component
const CatButton = (props) => (
  <button 
    style={{backgroundColor: props.colour}} 
    onClick={props.handleCatCount}>
    {props.catCount} stateless cats
  </button>
)



//This is a stateless component
const ColourAndCatButtons = (props) => {
  return(
    <>
      <button 
        style={{backgroundColor: props.colour}} 
        onClick={props.handleColour}>

        I am the colour {props.colour}
      </button>

      <CatButton 
        catCount={props.catCount} 
        handleCatCount={props.handleCatCount} 
        colour={props.colour}
      />

    </>
  )
}

// This is a stateful component
const App = () => {
  const [colour, setColour] = useState("blue");
  const [catCount, setCatCount] = useState(12);
  
  const handleColour = () => {
    let newColour 
    if(colour == "blue") {
      newColour = "red"
    } else{
      newColour = "blue"
    }
    setColour(newColour);
  };
  
  const handleCatCount = () => {
    setCatCount(catCount + 1);
  };

  return (
  <div>
    <ColourAndCatButtons 
      catCount={catCount} 
      handleCatCount={handleCatCount} 
      colour={colour} 
      handleColour={handleColour} />
    <DogButton/>
  </div>
  )
};



export default App
