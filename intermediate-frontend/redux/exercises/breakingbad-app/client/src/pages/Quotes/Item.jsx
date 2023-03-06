import React from "react";

const Item = ({ item }) => {
  return (
    <div className="py-2">
      <q>{item.quote}</q> <h1 className="font-bold">{item.author}</h1>
    </div>
  );
};

export default Item;
