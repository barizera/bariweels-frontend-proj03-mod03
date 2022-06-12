import Card from "../Card";
import "./style.css";
import { useEffect, useState } from "react";

const Home = ({cars}) => {


  return (
    <div className="Home">
      <h2 className="tittle_Home_container">Miniaturas disponíveis:</h2>
      <div className="Home_container">
        {cars.map((cars, index) => {
          return <Card key={index} cars={cars} />;
        })}
      </div>
    </div>
  );
};

export default Home;
