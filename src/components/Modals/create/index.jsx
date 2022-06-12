import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ModalCreateCar = ({ closeModal, getCars }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");

  const handleCreateCar = async () => {
    const newCar = {
      name,
      brand,
      category,
      color,
      img,
    };

    const res = await fetch("http://localhost:3001/cars/createCar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newCar),
    });

    if (res.status === 422) {
      toast.error("Erro na criação.");
    } else {
      toast.success("Carro adicionado com sucesso.");
    }

    const car = await res.json();
    setName("");
    setBrand("");
    setCategory("");
    setColor("");
    setImg("");
    closeModal();
    getCars();

    return car;
  };

  return (
    <>
      <div className="modal_overlay">
        <div className="modal_container">
          <div className="modal_header">
            <h3>Cadastre um BariWheels</h3>
            <span onClick={closeModal}>X</span>
          </div>
          <div className="modal_body">
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              placeholder="Digite o nome da nova miniatura.."
            />
            <input
              onChange={(event) => setBrand(event.target.value)}
              type="text"
              name="brand"
              placeholder="Digite a marca da nova miniatura.."
            />
            <input
              onChange={(event) => setCategory(event.target.value)}
              type="text"
              name="category"
              placeholder="Digite a categoria da nova miniatura.."
            />
            <input
              onChange={(event) => setColor(event.target.value)}
              type="text"
              name="color"
              placeholder="Digite a cor da nova miniatura.."
            />
            <input
              onChange={(event) => setImg(event.target.value)}
              type="text"
              name="img"
              placeholder="Digite o link da imagem da nova miniatura.."
            />
            <button onClick={handleCreateCar}>Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateCar;
