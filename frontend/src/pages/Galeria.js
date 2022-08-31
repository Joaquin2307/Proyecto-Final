import "../styles/Galeria.css"
const Galeria = (props) => {
    return(
        <main className="holder">
        <h2 className="nov">Galeria</h2>
        <div className="galeria">
            <img src="imagenes/imagen.png" className="img-thumbnail" alt=""/>
            <img src="imagenes/imagen 2.jpg"className="img-thumbnail" alt=""/>
            <img src="imagenes/imagen 3.jpg"className="img-thumbnail" alt=""/>
            <img src="imagenes/imagen 4.jpg" className="img-thumbnail" alt=""/>
      
        </div>
    </main>


    );
}
export default Galeria;