import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CartWidget from './CartWidget';
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
            <li className="nav-item"><NavLink activeClassName='active' to='/inicio'>Inicio</NavLink></li>
            <li className="nav-item">
              <NavLink activeClassName='active' to='#' className='dropdown-toggle' data-bs-toggle="dropdown" role="button" aria-expanded="false">
                Productos</NavLink>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/productos">Todos</a></li>
                  <li><a className="dropdown-item" href="/categoria/Perifericos">Perifericos</a></li>
                  <li><a className="dropdown-item" href="/categoria/Monitores">Monitores</a></li>
                  <li><a className="dropdown-item" href="/categoria/Hardware">Hardware</a></li>
                  <li><a className="dropdown-item" href="/categoria/Combos">Combos</a></li>
                </ul>
            </li>
            <li className="nav-item"><NavLink activeClassName='active' to='/nosotros'>Nosotros</NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </Col>
        <Col>
          <a src="#" className='icons'>
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <CartWidget />
        </Col>
      </Row>
      </Container>  
    </header>
  );
}
 
export default NavBar;
