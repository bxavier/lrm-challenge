import React from 'react';
import { Col, Row, Spacer, Typography } from '..';
import iconBag from '../../assets/icon-bag.png';

const Header = ({ amount }: { amount: number }) => {
  return (
    <Row>
      <Col $cols={{ xs: 8 }}>
        <Typography $variant="h3">Meu carrinho</Typography>
      </Col>
      <Col $cols={{ xs: 4 }}>
        <Row $end $middle style={{ margin: 0 }}>
          <img src={iconBag} alt="Carrinho de compras" />
          <Spacer spacing={{ xs: { ml: 0.2 } }}>
            <Typography $variant="body2">{amount} itens</Typography>
          </Spacer>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
