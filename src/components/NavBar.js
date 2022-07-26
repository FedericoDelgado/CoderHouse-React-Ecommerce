import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <header className='header'>
      <Container>
      <Row>
        <Col>
          <img src={require('../assets/images/Fixarlogo.png')} className="logoEmpresa" alt="Logo Fixar"/>
        </Col>
        <Col xs={6} className='menu'>
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink to='/inicio'>Inicio</NavLink></li>
            <li className="nav-item"><NavLink  to='/nosotros'>Nosotros</NavLink></li>
            <li className="nav-item"><NavLink  to='/contacto'>Contacto</NavLink></li>
            <li className="nav-item">
              <NavLink  to='#' className='dropdown-toggle' data-bs-toggle="dropdown" role="button" aria-expanded="false">
                Productos</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className='dropdown-item' to='/productos'>Todos</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Perifericos'>Perifericos</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Monitores'>Monitores</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Hardware'>Hardware</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Combos'>Combos</NavLink></li>
                </ul>
            </li>
          </ul>
        </Col>
        <Col>
          <NavLink className='icons' to='#'>
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
          <CartWidget />
        </Col>
      </Row>
      </Container>  
    </header>
  );
}
 
export default NavBar;
