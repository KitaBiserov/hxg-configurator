import React from "react";
import "../App.css";

import Categories from "../components/Categories";
import EquipmentBlock from "../components/EquipmentBlock";
import Sceleton from "../components/EquipmentBlock/Sceleton";
import logo from "../assets/img/logo.png";
import CalculationBlock from "../components/CalculationBlock";
import Vendors from "../components/Vendors";
import Sort from "../components/Sort";
import NavigationButtons from "../components/NavigationButtons";
import axios from "axios";

export const Home = () => {

const [items, setItems] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);
const [categoryId, setCategoryId] = React.useState(0);
const [typeId, setTypeId] = React.useState(0);



  //https://mockapi.io/projects/62c3fa7eabea8c085a67f487

  React.useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/api/equipment?="+categoryId)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://62c3fa7eabea8c085a67f486.mockapi.io/equipment?type="+typeId)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [typeId]);
  const callPost = () => {
    axios.post("/api/post").then((r) => {
      console.log(r);
    });
  };

  const callGet = () => {
    axios.get("/api/get").then((r) => {
      console.log(r);
    });
  };

  const callPatch = () => {
    axios.patch("/api/patch").then((r) => {
      console.log(r);
    });
  };

  return (
    <>
      <div className="grid-container">
        <div className="container-vertical">
          <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
        </div>
        <div className="grid-equipment">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
            : items.map((obj) => (
                <EquipmentBlock
                  key={obj.id}
                  title={obj.model}
                  price={obj.price}
                  description={obj.description}
                  img={obj.img}
                  types={obj.type}
                  quantity={obj.quantity}
                />
              ))}
        </div>
        <div className="container-vertical">
            {
                items.map((obj) => ( <Sort  value={typeId} onClickTypes={(i) => setTypeId(i)} key={obj.id}  types={obj.type}/> )
                    )}       
        </div>
        <NavigationButtons />
      </div>
    </>
  );
};

export default Home;
