import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ModalUpdateCar = ({ closeModal, cars, getCars }) => {
  const [name, setName] = useState(cars.name);
  const [brand, setBrand] = useState(cars.brand);
  const [category, setCategory] = useState(cars.category);
  const [color, setColor] = useState(cars.color);
  const [img, setImg] = useState(cars.img);

  const handleUpdateCar = async () => {
    const updatedCar = {
      name,
      brand,
      category,
      color,
      img,
    };

    const res = await fetch(
      `http://localhost:3001/cars/updateCar/${cars._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(updatedCar),
      }
    );

    if (res.status !== 200) {
      return toast.error("Não foi possível atualizar a miniatura.");
    }

    closeModal();
    getCars();
    toast.success("Miniatura atualizada com sucesso.");
  };

  return (
    <>
      <div className="modal-update-overlay">
        <div className="modal-update-container">
          <div>
            <h3>Editar miniatura</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <input
            value={name}
            placeholder="Digite o nome..."
            onChange={(event) => setName(event.target.value)}
            name="name"
          />
          <input
            value={brand}
            placeholder="Digite a marca ..."
            onChange={(event) => setBrand(event.target.value)}
            name="brand"
          />
          <input
            value={category}
            placeholder="Digite a categoria ..."
            onChange={(event) => setCategory(event.target.value)}
            name="category"
          />
          <input
            value={color}
            placeholder="Digite a cor ..."
            onChange={(event) => setColor(event.target.value)}
            name="color"
          />
          <input
            value={img}
            placeholder="Digite o caminho da imagem..."
            onChange={(event) => setImg(event.target.value)}
            name="img"
          />
          <button onClick={handleUpdateCar}>Editar</button>
        </div>
      </div>
    </>
  );
};

export default ModalUpdateCar;
