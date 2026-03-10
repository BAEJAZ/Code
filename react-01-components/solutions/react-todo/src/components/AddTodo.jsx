export default function AddTodo() {
	return (
		<form>
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
