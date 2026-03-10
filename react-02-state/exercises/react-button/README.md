# Exercise: React Button Colour Changer

## To start
- Run `npm install`
- Run `npm run dev`

## Goal
Use React **state** to make a button change colour when it is clicked.

## What You’ll Practise
- Creating a **state variable** with `useState`
- Updating that state when a user interacts with your component
- Using **conditional rendering** to change what appears on the screen

## Instructions

1. Open the `App.jsx` file.  
2. You’ll see a button that is always red — your task is to make it **switch between two colours** when clicked (for example, blue ↔ red).  
3. You’ll need to:
   - Create a new **state variable** to keep track of the button’s current colour.  
   - Write a small function that **toggles** that state each time the button is clicked.  
   - Use that state to decide what colour the button should be when it renders.  

## Hint
Think about how you can use a **boolean** value (`true` or `false`) to decide which colour to show.

For example:  
> "If my colour state is true, make it red. Otherwise, make it blue."

## Extension (optional)
- Change the button text to match the current colour.  
- Add a second button that resets it to the original colour.  
- Try using more than two colours using an array or string-based state.  
