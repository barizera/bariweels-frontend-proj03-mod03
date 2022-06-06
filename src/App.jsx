// Estamos importando o css do app
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

// cada componente é uma function, onde podemos passar tudo que for
function App() {
  return (
    // aqui dentro vamos passar o HTML
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
