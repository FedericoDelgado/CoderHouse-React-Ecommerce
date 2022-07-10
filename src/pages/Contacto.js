import './css/Contacto.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';

import React from 'react';

function Contacto() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col className="colPadding">
                <h3 className='pb-4 titulo'>Contacto</h3>
                <div className="info">
          <div> 
            <h4>Ubicación:</h4>
            <p>Capital Federal, Argentina</p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>Delgadofefe@gmail.com</p>
          </div>
          <div>
            <h4>Teléfono:</h4>
            <p>+549 11 21589197</p>
          </div>
        </div> 
            </Col>
            <Col>
            <img src={require(`../assets/mapa.jpg`)} alt="mapa" className="mapa"/>
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default Contacto;