import "./style.css";
import { useState } from "react";

const Card = ({ cars }) => {
      // criamos a variável number
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const removeNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="Card_container" key={`Card_container-${cars._id}`}>
      <span className="CardInfo_badge">{number}</span>
      <img src={cars.img} alt={`Foto do Carro ${cars.name}`} />
      <div className="CardInfos">
        <div>
          <h3>Carro: {cars.name}</h3>
          <p>Marca: {cars.brand}</p>
          <p>Categoria: {cars.category}</p>
          <p>Cor: {cars.color}</p>
          <p>Preço: R$12,99 </p>
        </div>
      </div>
      <div className="btn_container">
        <button className="btn_adddCar" onClick={addNumber}>
          Adicionar
        </button>
        <button className="btn_removeCar" onClick={removeNumber}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Card;
