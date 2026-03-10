# React Components Exercise – To-Do List (Part 1)

In this exercise, you’ll build a simple **To-Do List** app using React components.  
You’ll start with empty files and write the code needed to make the page display a basic list and an input section.

You will practise:
- Creating and rendering components  
- Passing props between components  
- Writing simple tests for React components  

---

## What You’ll Build

You’ll display:
- A heading: **“My To-Do List”**
- A list of tasks (using the `TodoList` and `TodoItem` components you’ll complete)
- An input section for adding a new task (non-functional for now)

By the end, your page should show the list and the “Add” section visually — it does **not** need to work yet.

---

## Getting Started

Run your dev server:

```bash
npm install
npm run dev
```

Your starter files look like this:

```
src/
  App.jsx
  main.jsx
  components/
    AddTodo.jsx
    TodoItem.jsx
    TodoList.jsx
    TodoList.test.jsx
    AddTodo.test.jsx
    TodoItem.test.jsx
```

Each component file currently looks like this:

```jsx
export default function TodoItem() {
}
```

You’ll need to **fill in the contents** for each.

---

## Your Tasks

### 1. Create the `TodoItem` Component

### 2. Create the `TodoList` Component

### 3. Display Your To-Do List in `App.jsx`

### 4. Add the `AddTodo` Component

---

# When You’re Done

Your page should show:

```
My To-Do List
--------------
• Buy groceries
• Finish React exercise
• Fuss the cat

[  Enter a new task  ] [ Add ]
```

---

## Your Testing Tasks

Inside the test files you’ll find empty files for you to fill in:
- `App.test.jsx`
- `TodoList.test.jsx`
- `AddTodo.test.jsx`

Write tests to check that:
- The heading **“My To-Do List”** appears on screen  
- The list renders the correct number of items  
- The input and button from `AddTodo` appear  

---

## Learning Outcomes
By completing this, you’ll:
- Practise creating your own React components  
- Understand props and child components  
- Begin writing your own React tests  

---

## Hints
- Start by rendering one component at a time and checking the browser  
- Don’t worry about adding or deleting items yet — just render everything correctly  
- Use meaningful prop names and keep components small  

### If you're stuck here are some extra hints 


In `TodoItem.jsx`:
- Accept a prop called `text`
- Return a simple list item showing that text


In `TodoList.jsx`:
- Accept a prop called `todos`
- Use `.map()` to render one `<TodoItem />` for each todo object
- Each item should have a unique `key` prop (use the todo’s `id`)


In `App.jsx`:
1. Import your `TodoList` and `AddTodo` components  
2. Create a list of sample todos inside your `App` component:
   ```js
   const todos = [
     { id: 1, text: "Buy groceries" },
     { id: 2, text: "Finish React exercise" },
     { id: 3, text: "Fuss the cat" }
   ];
   ```
3. Pass that list into `<TodoList />` as a prop  
4. Render `<AddTodo />` underneath it  


In `AddTodo.jsx`:
- Create a form with an `<input>` and a `<button>`  
- The button doesn’t need to do anything yet  
- Just make sure it renders properly


Use:
```js
screen.getByText()
screen.getByRole()
screen.getAllByRole()
```

And assertions like:
```js
expect(element).toBeInTheDocument();
expect(elements.length).toBe(3);
```
