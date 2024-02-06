import React from 'react';
import './App.css';
import { Grid, Col, Row } from './components';

function App() {
  return (
    <div className="App">
      <Grid fluid>
        <Row>
          <Col xs={12} md={8}>
            asda
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12}>asd</Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
