# React Components Exercise – Cohort Cards

In this exercise you will build a **reusable Card component** and use it to display a set of **people in your cohort**.  
You will practise:
- Creating and using components  
- Passing data through props  
- Using `props.children`  
- Rendering lists dynamically  

---

## What You’ll Build
A page that displays **one card for each person in the cohort**.  
Each card should include:
- The person’s name and role  
- A short note or fun fact  
- A **preset avatar icon** instead of a photo  

You’ll reuse the same `Card` component for every person.

---

## Getting Started

```bash
npm install
npm run dev
```

Open the app in the browser and keep the dev server running.

Your starting files are already set up:
```
src/
  App.jsx
  main.jsx
  components/
```

You will add new files for your components!!

---

## Task Steps

### Create a Reusable `Card` Component
Create a new file called `Card.jsx` inside the `components` folder.

Your `Card` component should:
- Render a box or container for other content  
- Accept a `color` prop to control the border colour (use a default if not provided)  
- Use `props.children` to display any nested elements inside  

💡 *Hint:* You can use inline styles to set border, padding, and width - look back at the slide examples!

**Checkpoint**
- The `Card` should display any child content placed inside it  
- The border colour changes if a `color` prop is provided  

---

### Create a `Profile` Component
`Profile.jsx` has been provided for you, inside the `components` folder.

Your `Profile` component should:
- Import and use your `Card` component  
- Display an avatar image, the person’s name, and their role  
- Show a note or fun fact if it exists  
- A collection of avatar pictures are available in the `src/public` folder

💡 *Hint:* Pass the `color` prop through from `Profile` to `Card`.  
💡 *Hint:* Use a small circular avatar (100px wide) and centre the content.

**Checkpoint**
- Displays each person’s details neatly inside a card  
- Works even if the note field is empty  

---

### Create a List of People (Your Cohort)
Open `App.jsx` and:
1. Create an array called `cohort` that holds an object for each person in your group.  
   Each object should include:
   - `id`, `name`, `role`, `note`, `avatar`, and `color`  
2. Render a `Profile` component for each person in the array using `.map()`  

💡 *Hint:* Your avatars can use images stored in the `/public` folder (e.g. `/kermit.jpg`)  
💡 *Hint:* Remember to add a unique `key` to each `Profile` when mapping.  

**Checkpoint**
- Each person in the cohort renders as a separate card  
- All cards use your shared `Card` and `Profile` components  
- The layout should wrap across the screen if needed  

---

### Stretch Goals
If you finish early:
- Make the card background change colour when hovered  
- Add an extra person to the cohort array  


---

## Learning Outcomes
By completing this exercise, you will:
- Understand how **props** pass data between components  
- Learn how **`props.children`** allows flexible, reusable layouts  
- Practise **rendering lists** with `.map()` in React  
- Recognise how **parent and child components** compose a UI  


---

## Troubleshooting
- **Nothing renders:** Check that your components are exported and imported correctly  
- **Missing avatars:** Ensure each avatar path (e.g. `/kermit.jpg`) exists in the `public` folder  
- **Key warning:** Each element in `.map()` must have a unique `key`  
- **React not defined:** Import React at the top if needed  

