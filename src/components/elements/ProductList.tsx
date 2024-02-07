import React from 'react';
import { Col, Row } from '..';
import { styled } from 'styled-components';
import ProductListItem from './ProductListItem';

const Listing = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
`;

function ProductList() {
  return (
    <Row>
      <Col cols={{ xs: 12 }}>
        <Listing>
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </Listing>
      </Col>
    </Row>
  );
}
export default ProductList;
