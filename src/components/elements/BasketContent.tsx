import React from 'react';
import { Col, Header, HorizontalRule, ProductList, Spacer } from '../index';

const BasketContent = ({ amount }: { amount: number }) => {
  return (
    <Col $cols={{ xs: 12, md: 9 }}>
      <Spacer $spacing={{ xs: { pt: 4, pb: 2, pr: 2, pl: 2 } }}>
        <Header amount={amount} />
        <HorizontalRule />
        <ProductList />
      </Spacer>
    </Col>
  );
};

export default BasketContent;
