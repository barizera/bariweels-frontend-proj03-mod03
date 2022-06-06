import logo from "../../assets/images/logocar.png";
import "./style.css";

const Header = () => {
  return (
    <header className="Header_container">
      <img className="Header_logo" width="150px" src={logo} alt="" />
      <span>BariWheels</span>
    </header>
  );
};
export default Header;
