import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [unfiltered, setUnFiltered] = useState(true);
  function selectedCat (e) {
    setSelectedCategory(e.target.value)
    setUnFiltered(false);
  //  let selected = document.getElementsByTagName("select").filter.value
   } 
   let selected = items.filter(item => item.category === selectedCategory) 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectedCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      {unfiltered ? 
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul> : selected.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </div>
  );
}

export default ShoppingList;
