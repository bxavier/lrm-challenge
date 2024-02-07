import React from 'react';
import { Col, Row, Typography } from '..';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

const ListingItem = styled.li`
  padding: 0;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.neutral300};
  &:nth-child(odd) {
    background-color: ${theme.colors.neutral100};
  }
  &:nth-child(even) {
    background-color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 124px;
  height: 124px;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  img {
    object-fit: cover;
    height: 100%;
  }
`;

const ProductListItem = () => {
  return (
    <ListingItem>
      <Row middle>
        <Col style={{ maxWidth: '156px' }}>
          <ImageContainer>
            <img src="https://cdn.leroymerlin.com.br/frontend-test/mostarda.jpg" alt="Produto 1" />
          </ImageContainer>
        </Col>
        <Col style={{ width: 'calc(100% - 156px)' }}>
          <Row>
            <Col cols={{ xs: 12, md: 4 }}>
              <Typography variant="h6" color="neutral400">
                Mostarda Heinz
              </Typography>
              <Typography variant="body1">R$ 15,00</Typography>
            </Col>
            <Col cols={{ xs: 12, md: 3 }}>
              <Typography variant="h6" color="neutral400">
                Estoque
              </Typography>
              <Typography variant="body1">100 un.</Typography>
            </Col>
            <Col cols={{ xs: false, md: 3 }}>
              <Typography variant="h6" color="neutral400">
                Quem gostou?
              </Typography>
              <Typography variant="body1">800</Typography>
            </Col>

            <Col cols={{ xs: 12, md: 2 }}>+ 1 -</Col>
          </Row>
        </Col>
      </Row>
    </ListingItem>
  );
};

export default ProductListItem;
