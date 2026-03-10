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
