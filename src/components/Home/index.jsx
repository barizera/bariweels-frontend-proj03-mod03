import Card from "../Card";
import "./style.css";
import { useState } from "react";
import ReactLoading from "react-loading";

const Home = ({ cars, getCars }) => {
  const [filterInput, setFilterInput] = useState("");
 
  return (
    <div className="Home">
      <h2 className="tittle_Home_container">Miniaturas disponíveis:</h2>
      <input
        value={filterInput}
        onChange={(event) => setFilterInput(event.target.value)}
        type="text"
        placeholder="filtrar por nome"
      />
      {cars.length === 0 ? (
        <ReactLoading type="spin" color="lightblue" />
      ) : (
        <div className="Home_container">
          {filterInput !== ""
            ? cars
                .filter((element) =>
                  element.name.toLowerCase().includes(filterInput.toLowerCase())
                )
                .map((element) => {
                  return (
                    <Card getcars={getCars} key={element._id} cars={element} />
                  );
                })
            : cars.map((element) => {
                return (
                  <Card getcars={getCars} key={element._id} cars={element} />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Home;
