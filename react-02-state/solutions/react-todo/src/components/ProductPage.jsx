// The TodoList component is responsible for displaying all the individual todo items that are passed in from App.jsx.
export default function ProductPage(product, onClick) {
  // If there are no tasks, show a simple message
 
  return (
    // We use <ul> to display each task as a list item
    <div className="ProductPageContent">
      <h1 className="ProductPageHead">{product.productName}.</h1>
      <img className="ProductPageImage" src={product.image}></img>
      <h3 className="ProductPageDescription">{product.description}</h3>
      <h2 className="ProductPagePrice">{product.price}</h2>
      </div>
  );
}
 
