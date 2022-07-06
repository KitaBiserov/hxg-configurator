import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function EquipmentBlock({ title, price, description, img, types, quantity}) {
  const [activeType, setActiveType] = useState(0);

  return (
    <div className="equipment-block">
      <img className="equipment-img" alt="equipment" src={img} />
      <h4 className="equipment-title">{title}</h4>
      <div className="equipment-tags">
        <ul>
          {types.map((type, i) => (
            <li key={i}
              onClick={() => setActiveType(i)}
              className={activeType === i ? "active" : ""}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="equipment-description">{description}</div>
      <div className="equipment-available">Available: {quantity}</div>
      <div className="equipment-price">PRICE: {price + "$"}</div>
      <button className="equipment-add-button">ADD</button>
    </div>
  );
}

export default EquipmentBlock;
