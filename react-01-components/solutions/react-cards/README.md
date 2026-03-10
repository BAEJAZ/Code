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
Each card will include:
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

You will add new files for your components.

---

## Task Steps

### 1. Create a Reusable `Card` Component
Create a new file:  
`src/components/Card.jsx`

```jsx
export default function Card(props) {
  const color = props.color || "#ccc";

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        width: "240px",
        background: "white",
        textAlign: "center",
      }}
    >
      {props.children}
    </div>
  );
}
```

**Checkpoint:**
- Card renders any child content you pass into it  
- No hard-coded content — everything comes through `props.children`

---

### 2. Create a `Profile` Component
Create:  
`src/components/Profile.jsx`

```jsx
import Card from "./Card";

export default function Profile(props) {
  return (
    <Card color={props.color}>
      <img
        src={props.avatar}
        alt={props.name}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      {props.note && <p><em>{props.note}</em></p>}
    </Card>
  );
}
```

**Checkpoint:**
- Displays a person’s name, role, and optional note  
- Uses an avatar instead of an uploaded image  

---

### 3. Prepare a List of People (Your Cohort)
Open `src/App.jsx` and add your cohort data.  
You can use emoji or icon URLs for avatars (or pick any small PNG/SVG files you have in the project).

```jsx
import Profile from "./components/Profile";

export default function App() {
  const cohort = [
    {
      id: 1,
      name: "Will Robinson",
      role: "Tech Trainer",
      note: "Status: Probs Waffling",
      avatar: "/feathers.jpg",
      color: "#588bb4",
    },
    {
      id: 2,
      name: "Thomas Crabtree",
      role: "Tech Trainer",
      note: "Loves Javascript!",
      avatar: "/kermit.jpg",
      color: "#e7e3e8",
    },
    {
      id: 3,
      name: "James Taylor",
      role: "Sales and recruitment",
      note: "When I grow up I want to be like Bielsa",
      avatar: "/pingu.jpg",
      color: "#ff6c6c",
    },
    {
    id: 3,
    name: "Rachel McMahon",
    role: "People person",
    note: "LOUD NOISES",
    avatar: "/lisa.jpg",
    color: "#ff6c6c",
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cohort.map((person) => (
        <Profile
          key={person.id}
          name={person.name}
          role={person.role}
          note={person.note}
          avatar={person.avatar}
          color={person.color}
        />
      ))}
    </div>
  );
}
```

**Checkpoint:**
- Renders one card per person  
- Each card uses the shared `Card` component  
- Uses `.map()` and unique `key` props  

---

### 4. Optional Enhancements (Stretch Goals)
If you finish early:
- Add a **“message” button** inside the `Profile` component  
- Let the card background colour change on hover  
- Add an **extra person** to the cohort array  
- Display a random avatar from a list of preset images  

Example random avatars (using [DiceBear API](https://www.dicebear.com/)):
```js
`https://api.dicebear.com/7.x/adventurer/svg?seed=${props.name}`
```

---

## Learning Outcomes
By completing this exercise, you will:
- Understand how **props** are used to pass data  
- Know how to use **`props.children`** to make flexible components  
- Practise **rendering lists** in React  
- Understand how **parent components** compose child components  

---

## Submission
Once finished:
1. Save your files  
2. Take a screenshot of the running page showing all cohort cards  
3. Share your screen or submit the screenshot via your learning platform  

---

## Troubleshooting
- **Nothing renders:** Check `App.jsx` is exported as default  
- **Missing avatars:** Ensure each `avatar` URL or emoji is valid  
- **Key warning:** Each element inside `.map()` must have a unique `key`  
- **React not defined:** Import React at the top of files if needed  


