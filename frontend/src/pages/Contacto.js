import"../styles/Contacto.css"
import React, {useState} from "react";
import axios from "axios";



const Contacto = (props) => {
    
  const initialForm= {
    nombre:" ",
    email:" ",
    telefono:" ",
    mensaje:" "
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg ] =useState(" ");
  const[formData, setFormData ] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData =>({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg(" ");
    setSending(true)
    const response = await axios.post("http://localhost:3000/api/contacto", formData);
    setSending(false);
    setMsg(response.data.message);
    if ( response.data.error === false ) {
      setFormData(initialForm)
    }
  }
    
    return(
<main className="holder">
    <div id="lista">
      <h2 id="titulo">Contactanos</h2>
      <ul id="contacto">
        <li>Telefono: 44452-3768</li>
        <li>Facebook: MarAndSimil</li>
      </ul>
      <p>Para contactarnos via mail:</p>
      <form action="/contacto" method="post" onSubmit={handleSubmit} >
      <div className="mb-3">
        <label for="nombre" >Nombre </label>
        <input type="text"  name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label for="email" >Email </label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label for="" >Telefono </label>
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea type="text" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
      </div>
      {sending? <p>Enviando...</p> : null}
      {msg ? <p>{msg}</p>: null}
      <button type="submit"  className="btn btn-primary">Enviar</button>
      </form>
    
    </div>
    
  </main>
    );
}
export default Contacto;