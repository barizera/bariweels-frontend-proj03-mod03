import "./style.css";
import { useState } from "react";
import ModalRemoveCar from "../Modals/delete";

const Card = ({ cars, getCars }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };
  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <div className="Card_container" key={`Card_container-${cars._id}`}>
      <h3>Carro: {cars.name}</h3>

      <img src={cars.img} alt={`Foto do Carro ${cars.name}`} />
      <div className="CardInfos">
        <div>
          <p>Marca: {cars.brand}</p>
          <p>Categoria: {cars.category}</p>
          <p>Cor: {cars.color}</p>
          <p>Preço: R$12,99 </p>
        </div>
      </div>
      <div className="btn_container">
        <button className="btn_editCar" onClick={handleShowEditModal}>
          Editar
        </button>
        <button className="btn_removeCar" onClick={handleShowRemoveModal}>
          Remover
        </button>
        {showRemoveModal && (
          <ModalRemoveCar
            cars={cars}
            closeModal={handleShowRemoveModal}
            getCars={getCars}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
