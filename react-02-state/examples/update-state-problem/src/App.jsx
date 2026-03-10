import { useState } from 'react'

import './App.css'


const ClickerButton = (props) => (
  <button onClick={props.handleClick}>I've been clicked {props.clicks} times!</button>
);

const ColourButton = (props) => (
  <button style={{backgroundColor: props.colour}} onClick={props.handleColour}>I am now the colour {props.colour}</button>
)

const App = () => {
  const [state, setState] = useState(
    { 
      colour: "blue", 
      clicks: 0 
    }
  );

  // Our clicks state mutation function
  const handleCountClick = () => {
    const newState = { clicks: state.clicks + 1 }
    setState(newState);
  };
  
  // Our colour state mutation function
  const handleColourClick = () => {
    const newColour = state.colour == "blue" ? "red" : "blue"
    const newState = { colour: state.colour = newColour }
    setState(newState);
  };

  return (
    <div>
      <ClickerButton clicks={state.clicks} handleClick={handleCountClick} />
      <ColourButton colour={state.colour} handleColour={handleColourClick} />
    </div>
  )
};

export default App
