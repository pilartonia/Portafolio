import { Navigate } from 'react-router-dom';
import '../styles/Projects.css';

const Projects=()=>{

    return(
        <div className='projects'>
            <img src='src/img/ojodelaguna.png' className='fotoOjo'/>
            <div className='descripcion'>
                <p>This project is an online art store where customers can browse the available catalog, make personalized requests, view descriptions of the techniques used in the pieces and purchase artworks. It was built using React.js on the frontend.</p>
                <a href='https://github.com/pilartonia/team12ODL'>Repository</a>
            </div>
        </div>
        
    )}

export default Projects;