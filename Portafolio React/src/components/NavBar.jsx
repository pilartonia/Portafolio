import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar=()=>{
    const navigate = useNavigate();
    const handleNavigation = (path) => {navigate(path);
    };
    return(
        <header className='wrapper'>
            <nav className="NavBar">
               <div className="option"><a onClick={() => handleNavigation("/Home")} className='NavLink'>Home</a></div>
                <div className="option"><a onClick={() => handleNavigation("/Projects")} className='NavLink'>Projects</a></div>
                <div className="option"><a onClick={() => handleNavigation("/Contact")} className='NavLink'>Contact</a></div> 
            </nav>
        </header>
    )
    
}

export default NavBar;