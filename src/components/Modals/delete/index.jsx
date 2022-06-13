import "./style.css";
import { toast } from "react-hot-toast";


const ModalRemoveCar = ({ closeModal, cars, getCars }) => {
  const handleRemoveCar = async () => {
    const res = await fetch(
      `http://localhost:3001/cars/deleteCar/${cars._id}`,
      {
        method: "DELETE",
        mode: "cors",
      }
    );

    if (res.status !== 200) {
      return toast.error("Exclusão não concluída.");
    }

    closeModal();
    getCars();
    toast.success("Miniatura excluída com sucesso");
  };

  return (
    <>
      <div className="modal-remove-overlay">
        <div className="modalRemove-container">
          <h3>Deseja excluir a miniatura {cars.name}?</h3>
          <div className="modal-remove-actions">
            <button className="cancelButton" onClick={closeModal}>
              Não
            </button>
            <button className="successButton" onClick={handleRemoveCar}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRemoveCar;
