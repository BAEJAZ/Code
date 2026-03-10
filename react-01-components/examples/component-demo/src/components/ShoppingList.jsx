import React from "react";

function ShoppingList() {
  const items = [
    { id: 1, name: "Apples" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Milk" },
  ];

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Shopping List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
