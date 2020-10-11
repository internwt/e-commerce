import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <div class="grid">

    <nav class="navigation">
    <ul className="navigation__list navigation__list--inline">
                    <li class="navigation__item"><Link to="/">Shop</Link></li>
                    <li class="navigation__item"><Link to="/cart">My cart</Link></li>
                    <li class="navigation__item"><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
    
    </nav>

  </div>
        
    )
}
export default Navbar;
