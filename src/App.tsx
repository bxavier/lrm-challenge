import React from 'react';
import './App.css';
import { Grid, Col, Row, Spacer, Typography } from './components';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import HorizontalRule from './components/layout/HorizontalRule';
import iconBag from './assets/icon-bag.png';
import ProductList from './components/elements/ProductList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <Grid>
          <Row>
            <Col cols={{ xs: 12, md: 9 }}>
              <Spacer spacing={{ xs: { mt: 2, mb: 2, mr: 1, ml: 1 } }}>
                <Row>
                  <Col cols={{ xs: 8 }}>
                    <Typography variant="h3">Meu carrinho</Typography>
                  </Col>
                  <Col cols={{ xs: 4 }}>
                    <Row end middle style={{ margin: 0 }}>
                      <img src={iconBag} alt="Carrinho de compras" />
                      <Spacer spacing={{ xs: { ml: 0.2 } }}>
                        <Typography variant="body2">3 itens</Typography>
                      </Spacer>
                    </Row>
                  </Col>
                </Row>
                <HorizontalRule />
                <ProductList />
              </Spacer>
            </Col>
            <Col cols={{ xs: 12, md: 3 }}>
              <Row>
                <Col cols={{ xs: 12 }}>
                  <Typography variant="h6">Subtotal</Typography>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
