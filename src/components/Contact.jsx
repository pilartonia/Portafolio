import { Navigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact=()=>{
    return(
        <div className='container'>
            <h1>Contact information</h1>
            <p className='bold-text'>Email: <a href='mailto:pilarosorio0408@hotmail.com'>pilarosorio0408@hotmail.com</a></p>
            <p className='bold-text'>LinkedIn: <a href='https://www.linkedin.com/in/md-pilar-osorio-ravelo-82978a229' target='_blank' rel='noopener noreferrer'>
            www.linkedin.com/in/md-pilar-osorio-ravelo-82978a229</a></p>
            <h1>Curiculum vitae</h1>
            <a href="CV_Maria_del _pilar_Osorio_Ravelo.pdf" download="documento.pdf">Descargar Documento</a>
        </div>

)}

export default Contact;