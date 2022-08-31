
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";
import Galeria from "./pages/Galeria";
import Nav from "./components/layout/Nav";
import Novedades from "./pages/Novedades";
// import "./MarAndSimil.css"
// import "./styles/HomePage.css"

function App() {
  return (
    <div ClassName="App">
      <Header></Header>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/contacto" element={<Contacto/>}/> 
      <Route path="/galeria" element={<Galeria/>}/>
      <Route path="/novedades" element={<Novedades/>}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>

  );
}
export default App;