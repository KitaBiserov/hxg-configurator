import React from "react";


import "./Categories.css";

function Categories({value, onClickCategory}) {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const categoryList = ["Networking", "Optics and Trasceivers", "POWER MODULES", "Fiber Optic Cables", "Cooper Systems", "Panels, Enclousers and Racks" ];
  const choseCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div  className="categories">
      <ul>
        {categoryList.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : " "}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );

        }

export default  Categories;
