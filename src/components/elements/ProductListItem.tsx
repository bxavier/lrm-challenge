import React from 'react';
import { styled } from 'styled-components';
import { IProduct, decreaseAmount, increaseAmount } from '../../store/features/basketSlice';
import { useAppDispatch } from '../../store/store';
import { Col, Row, Typography } from '../index';

const ListItem = styled.li`
  padding: 0;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.neutral100};
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

const LikeHeart = styled.span`
  color: red;
  font-size: 1.5rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  &:before {
    content: '\u2764';
  }
`;

const Amount = styled.div`
  font-family: ${({ theme }) => theme.fonts.tagProperties.body1.family};
  font-size: ${({ theme }) => theme.fonts.tagProperties.body1.size};
  padding: 0 0.3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  text-align: center;
  display: inline-block;
`;

const AmountButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  font-size: 1.2rem;
  margin0;
  cursor: pointer;
`;

const ProductListItem = ({ product }: { product: IProduct }) => {
  const { name, price, stock, likes, amount, image } = product;

  const dispatch = useAppDispatch();

  return (
    <ListItem>
      <Row $middle>
        <Col style={{ maxWidth: '156px' }}>
          <ImageContainer>
            <img src={image} alt={name} />
          </ImageContainer>
        </Col>
        <Col style={{ width: 'calc(100% - 156px)' }}>
          <Row>
            <Col $cols={{ xs: 12, md: 3 }}>
              <Typography $variant="h6" $color="neutral400">
                {name}
              </Typography>
              <Typography $variant="body1">
                {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </Typography>
            </Col>
            <Col $cols={{ xs: 12, md: 2 }}>
              <Typography $variant="h6" $color="neutral400">
                Estoque
              </Typography>
              <Typography $variant="body1">{stock} un.</Typography>
            </Col>
            <Col $cols={{ xs: false, md: 3 }}>
              <Typography $variant="h6" $color="neutral400">
                Quem gostou?
              </Typography>
              <Typography $variant="body1">
                <LikeHeart />
                {likes}
              </Typography>
            </Col>

            <Col $cols={{ xs: 12, md: 3 }}>
              <Amount>
                <AmountButton
                  onClick={() => {
                    if (amount > 1) dispatch(decreaseAmount({ name }));
                  }}>
                  -
                </AmountButton>
                {amount}
                <AmountButton
                  onClick={() => {
                    dispatch(increaseAmount({ name }));
                  }}>
                  +
                </AmountButton>
              </Amount>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListItem>
  );
};

export default ProductListItem;
