export default function AddTodo(props) {

	const [inputValue, setInputValue] = useState("")
	const handleAdd = () => {
		console.log(`iufhgdfu`)
		event.preventDefault();
	}

	return (
		<form onSubmit={handleAdd}>
			<input
				type="text"
				placeholder="Enter a new task"
				style={{ padding: "0.5rem", width: "70%" }}
			/>
			<button type="submit" style={{ marginLeft: "0.5rem" }}>
				Add
			</button>
		</form>
	);
}

