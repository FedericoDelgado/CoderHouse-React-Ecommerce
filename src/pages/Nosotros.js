import './css/Nosotros.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';

import React from 'react';

function Nosotros() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col>
                <img src={require(`../assets/nosotros.jpg`)} alt="mapa" className="mapa"/>
            </Col>
            <Col className="colPadding">
                <h3 className='pb-4 titulo'>Sobre Nosotros</h3>
                <p>¿Porque elegirnos? <br></br>
                Somos un servicio tecnico de PC y Notebook bien capacitados, especializados en distintos campos (tecnico de PC y laptop en CETAE y Soporte de Redes en Educación IT), con el objetivo de brindar un arreglo de computadoras seguro, confiable y eficiente.
                     
                </p>
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default Nosotros;