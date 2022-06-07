import Card from "../Card";
import "./style.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await fetch("http://localhost:3001/carros/getAllCars");
    const carsList = await res.json();

    setCars(carsList);
  };

  useEffect(() => {
    getCars();
  }, []);

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
