import React from 'react';
import './App.css';
import { Grid, Col, Row, Spacer, Typography } from './components';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <Grid>
          <Row>
            <Col cols={{ xs: 12, md: 8 }}>
              <Spacer spacing={{ xs: { m: 1 } }}>
                <Typography variant="h3">Variant</Typography>
              </Spacer>
            </Col>
            <Col cols={{ xs: 12, md: 4 }}>
              <Row>
                <Col cols={{ xs: 12 }}>asd</Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
