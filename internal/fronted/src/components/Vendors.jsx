import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Categories.css";

function Vendors() {

  const [activeIndex, setActiveIndex] = React.useState(0);
const categoryList = ["H3C", "UNIVIEW", "BIGO"];
  const choseCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div >
      <ol>
        {categoryList.map((value, i) => (
          <li
            key={i}
            onClick={() => choseCategory(i)}
            className={activeIndex === i ? "active" : " "}
          >
            {value}
          </li>
        ))}
      </ol>
    </div>
  );

        }

export default Vendors;
