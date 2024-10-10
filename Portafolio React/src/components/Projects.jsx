import { Navigate } from 'react-router-dom';
import '../styles/Projects.css';

const Projects=()=>{

    return(
        <div className='projects'>
            <img src='src/img/ojodelaguna.png' className='fotoOjo'/>
            <div className='descripcion'>
                <p>Este proyecto es una Tienda online de venta de arte donde el cliente pueda observar el catálogo disponible, realizar una solicitud personalizada, una descripción de las técnicas de las piezas, Adquirir obras, inscribirse a talleres y seguir las redes sociales del proyecto​. Fue construida usando React.js en el frontend.</p>
                <a href='https://github.com/pilartonia/team12ODL'>Repositorio</a>
            </div>
        </div>
        
    )}

export default Projects;