import React from 'react';
import { styled } from 'styled-components';
import { Col, Row, Spacer, Typography } from '../index';

const AsideContainer = styled(Col)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
  border-radius: 0.5rem;
`;

const ShippingBox = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 0.5rem;
`;

const Aside = () => {
  return (
    <AsideContainer $cols={{ xs: 12, md: 3 }}>
      <Spacer $spacing={{ xs: { pt: 3, pl: 1, pr: 2, pb: 1 } }}>
        <Row>
          <Col $cols={{ xs: 12 }}>
            <Typography $variant="h4" $color="neutral500">
              Método de entrega
            </Typography>
          </Col>
        </Row>
        <Spacer $spacing={{ xs: { pt: 1 } }}>
          <Row>
            <Col $cols={{ xs: 12 }}>
              <ShippingBox>asds</ShippingBox>
            </Col>
          </Row>
        </Spacer>
      </Spacer>
    </AsideContainer>
  );
};

export default Aside;
