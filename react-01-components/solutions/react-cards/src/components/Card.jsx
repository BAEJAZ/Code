export default function Clard(props) {
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
