import logo from "../../assets/images/logocar.png";


import "./style.css";

const Header = () => {
  return (
    <header className="Header_container">
      <div>
        <img className="Header_logo" width="150px" src={logo} alt="" />
        <p className="p_logo">BariWheels</p>
      </div>
      
    </header>
  );
};
export default Header;
