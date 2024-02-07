import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const VariantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
} as const;

interface IDivProps {
  color?: keyof typeof theme.colors;
  weight?: keyof typeof theme.fonts.weights;
  variant: keyof typeof VariantMap;
}

const Div = styled.div<IDivProps>`
  color: ${props => theme.colors[props.color || 'black']};
  font-size: ${props => theme.fonts.tagProperties[props.variant].size};
  font-family: ${props => theme.fonts.tagProperties[props.variant].family};
  font-weight: ${props => theme.fonts.tagProperties[props.variant].weight};
`;

interface ITypographyProps extends IDivProps {
  variant: keyof typeof VariantMap;
  children?: React.ReactNode;
}

const Typography = ({ variant = 'body1', children, color = 'black', weight = 'regular' }: ITypographyProps) => {
  const selectedComponent = VariantMap[variant];

  return (
    <Div as={selectedComponent} color={color} weight={weight} variant={variant}>
      {children}
    </Div>
  );
};

export default Typography;
