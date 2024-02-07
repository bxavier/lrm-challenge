import styled from 'styled-components';
import theme from '../../styles/theme';

interface ISizeProps {
  m?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
}

export interface ISpacerProps {
  spacing: {
    xs?: ISizeProps;
    sm?: ISizeProps;
    md?: ISizeProps;
    lg?: ISizeProps;
  };
}

const Spacer = styled.div<ISpacerProps>`
  box-sizing: border-box;
  border: 1px solid red;

  ${p =>
    p.spacing &&
    Object.keys(p.spacing).map(spacer => {
      return `
        @media (min-width: ${theme.breakpoints[spacer as keyof ISpacerProps['spacing']]}px) {
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.m && `margin: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.m}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mt && `margin-top: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mt}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mr && `margin-right: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mr}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.ml && `margin-left: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.ml}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mb && `margin-bottom: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.mb}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.p && `padding: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.p}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pt && `padding-top: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pt}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pr && `padding-right: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pr}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pl && `padding-left: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pl}rem;`}
          ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pb && `padding-bottom: ${p.spacing[spacer as keyof ISpacerProps['spacing']]?.pb}rem;`}
        }
      `;
    })}
`;

export default Spacer;
