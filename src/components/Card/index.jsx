import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div className="Card_container">
      <img src={props.img} alt={`Foto do Carro ${props.name}`} />
      <div className="CardInfos">
        <div>
          <h3>Carro: {props.name}</h3>
          <p>Marca: {props.brand}</p>
          <p>Categoria: {props.category}</p>
          <p>Cor: {props.color}</p>
          <p>Preço: R$12,99 </p>
        </div>
        <button className="btn_adddCar">
          <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />
        </button>
      </div>
    </div>
  );
};

export default Card;
