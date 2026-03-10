import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function App() {
	const sampleTodos = [
		{ id: 1, text: "Buy groceries" },
		{ id: 2, text: "Finish React exercise" },
		{ id: 3, text: "Fuss the cat" },
		{ id: 4, text: "Take the bins out" },
		{ id: 5, text: "Fold the laundry" }
	];

	return (
		<div style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "sans-serif" }}>
			<h1>My To-Do List</h1>
		</div>
	);
}
