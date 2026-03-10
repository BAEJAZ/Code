export default function ProductCard(props) {



return (
<div className="productCard" onClick={props.onSelect} style={{ display: "grid", gridTemplateColumns: "2fr 2fr", padding: "2rem", margin: "1rem 0" }}>
   <img src={props.image} alt={props.description} className="cardImage" />
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
        
      </div>
);
}
