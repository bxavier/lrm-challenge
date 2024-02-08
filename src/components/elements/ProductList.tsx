import React from 'react';
import { Col, Row } from '..';
import { styled } from 'styled-components';
import ProductListItem from './ProductListItem';
import { useAppSelector } from '../../store/store';
import { v4 as uuidv4 } from 'uuid';

const Listing = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
`;

function ProductList() {
  const { products } = useAppSelector(store => store.basket);

  return (
    <Row>
      <Col $cols={{ xs: 12 }}>
        <Listing>
          {products.map(product => (
            <ProductListItem key={uuidv4()} product={product} />
          ))}
        </Listing>
      </Col>
    </Row>
  );
}
export default ProductList;
