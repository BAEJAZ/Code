export default function Greeting(props) {
    return (
      <div>
        <h1>Hello {props.name}</h1>
        {props.isBirthday && <p>Happy Birthday to you!</p>}
      </div>
    );
}

