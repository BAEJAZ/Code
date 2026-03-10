import { useState } from "react";
import { useEffect } from "react";
import ProductPage from "./components/ProductPage";
import ProductCard from "./components/ProductClick"
import "./app.css"


export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setSelectedProduct(null);
  }
,[])

  // Starter list of example tasks
  const products = [
    {name: "Magna Carta",
      price: 320000,
      description: "The original Magna Carta, established in the year 1215 much to King John's dismay",
      image: "/public/assets/magna.png",
      id: "1",
    },
    {name: "Temporal Stabilizer",
      price: 75000000,
      description: "The original Magna Carta, created in the year 1215",
      image: "/magna.png",
      id: "2",
    },
    {name: "Alexander the Great's Sword",
      price: 111000,
      description: "The original Magna Carta, created in the year 1215",
      image: "/magna.png",
      id: "3",
    },
    {name: "Alexander the Great's Sword",
      price: 111000,
      description: "The original Magna Carta, created in the year 1215",
      image: "/magna.png",
      id: "4",
    }
  ]

  return (
    <div className="productListings">
      {products.map((product) => (
    <ProductCard className="productCard"
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        
        />
      ))}
    </div>
    
  );
}



// Our App component holds all the data for the to-do list — it’s the single source of truth.
// We’re keeping each task as an object with id, text and completed properties.
// we are never mutating the array directly — we always create a new version with map() or filter().
// Each action ( add, toggle, delete ) updates state, which triggers React to re-render the UI automatically.
// We pass functions like onAdd, onToggle, and onDelete down to children as props — this is how data flows up and down in React.
