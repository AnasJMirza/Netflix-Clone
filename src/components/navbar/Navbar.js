import React, {useState, useEffect} from 'react';
import './Navbar.css'

const Navbar = () => {

    const [navBackground, setNavBackground] = useState(false);

    const transitionNavbar = () =>{
        if  (window.scrollY > 100){
            setNavBackground(true);
        }
        else{
            setNavBackground(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${navBackground && "navBackground"}`}>
            <div className="navContent">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' className='logo'/>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' className='avatar'/>
            </div>
        </div>
    );
};

export default Navbar;