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
  size?: keyof typeof theme.fonts.sizes;
  weight?: keyof typeof theme.fonts.weights;
}

const Div = styled.div<IDivProps>`
  color: ${props => theme.colors[props.color as keyof typeof theme.colors]};
  font-size: ${props => theme.fonts.sizes[props.size as keyof typeof theme.fonts.sizes]};
`;

interface ITypographyProps extends IDivProps {
  variant: keyof typeof VariantMap;
  children?: React.ReactNode;
}

const Typography = ({
  variant = 'body1',
  children,
  color = 'black',
  size = variant,
  weight = 'regular',
}: ITypographyProps) => {
  const selectedComponent = VariantMap[variant];

  return (
    <Div as={selectedComponent} color={color} size={size} weight={weight}>
      {children}
    </Div>
  );
};

export default Typography;
