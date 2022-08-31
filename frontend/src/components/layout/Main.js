// import "../../styles/HomePage.css"

const Main = (props) => {
    return(
        <main className="holder">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="imagenes/calzado 1.jpg" claclassNamess="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="imagenes/imagen fabrica.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="imagenes/calzado 2.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <h2 id="bienvenidos">Bienvenidos</h2>
          <p id="textobienvenidos">Pyme familiar dedicada al calzado,  vendemos productos de alta calidad de goma o pvc. Suelas de seguridad, planchas, ojotas, y mucha mas variedad mirar el catalogo para mas informacion a cerca de los productos.</p>
        </div>
      </main>
    
    )
}
export default Main;