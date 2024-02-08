import React from 'react';
import { styled } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../store/store';
import { Col, Row } from '../index';
import ProductListItem from './ProductListItem';

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
