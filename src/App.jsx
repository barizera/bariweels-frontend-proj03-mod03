// Estamos importando o css do app
import { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import ModalCreateCar from "./components/Modals/create";

// cada componente é uma function, onde podemos passar tudo que for
function App() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await fetch("http://localhost:3001/cars/getAllCars");
    const carsList = await res.json();

    setCars(carsList);
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    // aqui dentro vamos passar o HTML
    <div className="App">
      <Toaster position="bottom-center" />
      <Header getCars={getCars} />
      <Home getCars={getCars} cars={cars} />
      <Footer />
    </div>
  );
}

export default App;
