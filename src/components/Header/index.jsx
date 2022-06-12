import logo from "../../assets/images/logocar.png";
import addCar from "../../assets/images/icons/addCar.png";
import { useState } from "react";
import "./style.css";
import ModalCreateCar from "../Modals/create";

const Header = ({ getCars }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <header className="Header_container">
        <div>
          <img className="Header_logo" width="150px" src={logo} alt="" />
          <p className="p_logo">BariWheels</p>
        </div>
        <img onClick={handleShowModalCreate} src={addCar} alt="" />
      </header>
      {showModalCreate && (
        <ModalCreateCar closeModal={handleShowModalCreate} getCars={getCars} />
      )}
    </>
  );
};
export default Header;
