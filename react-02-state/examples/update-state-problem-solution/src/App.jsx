import { useState } from 'react';
import './App.css';

const ClickerButton = (props) => (
  <button onClick={props.handleClick}>
    I've been clicked {props.clicks} times!
  </button>
);

const ColourButton = (props) => (
  <button
    style={{ backgroundColor: props.colour }}
    onClick={props.handleColour}
  >
    I am now the colour {props.colour}
  </button>
);

const App = () => {
  //----------Copy Existing State to update whole obkevt----------//
  // const [state, setState] = useState({
    //   colour: 'blue',
    //   clicks: 0
    // });
    
    //  // Update clicks using object copy and merge
    //  const handleCountClick = () => {
      //   const newState = { ...state };
      //   newState.clicks = state.clicks + 1;
      //   setState(newState);
      // };
      
      // // Toggle colour using object copy and merge
      // const handleColourClick = () => {
        //   const newState = { ...state };
        //   newState.colour = state.colour === 'blue' ? 'red' : 'blue';
        //   setState(newState);
        // };

  //----------Manage each piece of state separately----------//
  const [clicks, setClicks] = useState(0);
  const [colour, setColour] = useState('blue');

  // Update clicks
  const handleCountClick = () => {
    setClicks(clicks + 1);
  };
  
  const name = document.getElementById("name").value


  // Toggle colour
  const handleColourClick = () => {
    const newColour = colour === 'blue' ? 'red' : 'blue';
    setColour(newColour);
  };
        
  return (
    <div>
      <ClickerButton clicks={state.clicks} handleClick={handleCountClick} />
      <ColourButton colour={state.colour} handleColour={handleColourClick} />
    </div>
  );
};

export default App;
