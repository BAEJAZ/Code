import TodoItem from "./TodoItem";

export default function TodoList(props) {
	const { todos } = props;

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} text={todo.text} />
			))}
		</ul>
	);
}
