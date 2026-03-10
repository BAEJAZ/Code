# Exercise: React To-Do App (Continued)

## Goal
In this exercise, you'll extend your existing To-Do app to support user input and dynamic updates.  
You’ll use what you’ve learned about `useState`, event handling and controlled inputs.

---

## Tasks

### 1. Add new tasks
- Make the input field controlled using `useState`.
- When the user types a new task and clicks **Add**, it should appear in the list.
- Clear the input field after adding a task.

---

### 2. Mark tasks as complete
- Add a checkbox (or toggle button) next to each task.
- When checked, show the task as completed (for example, strikethrough text or greyed out).
- Remember to update only the task that was changed, not the entire array.

---

### 3. Delete a task
- Add a “Delete” button next to each task.
- When clicked, remove that task from the list.

---

### 4. Add validation
- If the user clicks **Add** with an empty input, show a message like “Please enter a task.”
- Bonus: disable the **Add** button when the input is empty.

---

## Hints
*Hint:* You’ll need an array in state to store your list of tasks.
*Hint:* Use `map()` to return a new array with the updated task.
*Hint:* Use `filter()` to return a new array without the deleted task.

---
## Learning Outcomes
By the end of this exercise, you should be able to:
- Manage form state using `useState`
- Handle events like `onChange` and `onClick`
- Render and update lists dynamically
- Work with immutable state updates in React
- Understand when to use controlled inputs over uncontrolled ones

---

📂 **See:** `./exercises/react-todo/` for starter files
