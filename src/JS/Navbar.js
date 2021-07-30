import React, { Component } from 'react';
import '../CSS/Navbar.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Navbar extends Component{
    render(){
        return(
            <div className="Navbars">
                <nav className="Nav-1">
                    <div className="search_icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="shop_icon">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <ul className="Nav-links">
                        <li className="Nav-link-item"><a>Watch</a></li>
                        <li className="Nav-link-item"><a>TV</a></li>
                        <li className="Nav-link-item"><a>Music</a></li>
                        <li className="Nav-link-item"><a>Support</a></li>
                        <li className="Nav-link-item"><a className="Login_Signup" href="#">Login</a></li>
                        <li className="Nav-link-item"><a className="Login_Signup" href="#">Signup</a></li>
                    </ul>
                </nav>
                <nav className="Nav-2"></nav>
                <nav className="Nav-3"></nav>
            </div>
            
            
        
        )
    }
}

export default Navbar;