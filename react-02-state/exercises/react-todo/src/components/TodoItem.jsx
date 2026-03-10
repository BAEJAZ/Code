export default function TodoItem(props) {
	return (
		<li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
			{props.text}
		</li>
	);
}
