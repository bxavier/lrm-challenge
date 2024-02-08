import React, { useEffect } from 'react';
import './App.css';
import { Grid, Col, Row, Spacer, Typography } from './components';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import HorizontalRule from './components/layout/HorizontalRule';
import ProductList from './components/elements/ProductList';
import { useAppDispatch, useAppSelector } from './store/store';
import { fetchProducts, updateTotal } from './store/features/basketSlice';
import Header from './components/elements/Header';

function App() {
  const { amount, products } = useAppSelector(state => state.basket);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, products]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <Grid>
          <Row>
            <Col $cols={{ xs: 12, md: 9 }}>
              <Spacer spacing={{ xs: { pt: 4, pb: 2, pr: 2, pl: 2 } }}>
                <Header amount={amount} />
                <HorizontalRule />
                <ProductList />
              </Spacer>
            </Col>
            <Col $cols={{ xs: 12, md: 3 }}>
              <Row>
                <Col $cols={{ xs: 12 }}>
                  <Typography $variant="h6">Subtotal</Typography>
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
