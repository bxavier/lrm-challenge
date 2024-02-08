import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Aside, BasketContent, Grid, Row } from './components';
import { fetchProducts, updateTotal } from './store/features/basketSlice';
import { fetchShippings } from './store/features/shippingSlice';
import { useAppDispatch, useAppSelector } from './store/store';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  const { amount, products } = useAppSelector(state => state.basket);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchShippings());
    console.log('dispatched');
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
            <BasketContent amount={amount} />
            <Aside />
          </Row>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
