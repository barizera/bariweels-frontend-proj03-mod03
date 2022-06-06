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
    <div>
      <h2 className="tittle_Home_container">Miniaturas disponíveis:</h2>
      <div className="Home_container">
        {cars.map((element, index) => {
          return (
            <Card
              key={index}
              id={element._id}
              name={element.name}
              brand={element.brand}
              color={element.color}
              category={element.category}
              img={element.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
