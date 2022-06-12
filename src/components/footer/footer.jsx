import React from "react";
import registered from "../../assets/images/icons/registered-solid.svg";
import "./style.css";
import logo from "../../assets/images/logocar.png";
import logoWhats from "../../assets/images/icons/whatsapp-brands.svg";
import logoInsta from "../../assets/images/icons/instagram-square-brands.svg";
import logoEmail from "../../assets/images/icons/at-solid.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>BariWhells</p>
        <img className="iconsFooter" src={registered} alt="" />
      </div>
      <img className="logo_car" src={logo} alt="logo BariWheels" />
      <div className="Contact">
       <a href=""> <img className="iconsFooter" src={logoWhats} alt="Imagem Whatsapp" /></a>
       <a href=""> <img className="iconsFooter" src={logoEmail} alt="Imagem E-mail" /></a>
       <a href=""> <img className="iconsFooter" src={logoInsta} alt="Imagem Instagram" /></a>
      </div>
    </footer>
  );
};

export default Footer;
