import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer } from './Button';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-sm  
            navbar-dark px-sm-5">Hello
            <ul className = "navbar-nav align-items-center">
                <li className = "nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto"><ButtonContainer>
                <span className="mr-2"> <i className="fas fa-cart-plus">my cart</i></span>
               
            </ButtonContainer></Link>
            </NavWrapper>
         );
    }
}

 const NavWrapper  = styled.nav`
 background:var(--mainBlue);
 .nav-link {
     color: var(--mainWhite) !important;
     font-size: 1.3rem;
 }
 `;
export default Navbar;