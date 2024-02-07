import styled, { css } from 'styled-components';
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

interface IBreakpointProps {
  xs?: ISizeProps;
  sm?: ISizeProps;
  md?: ISizeProps;
  lg?: ISizeProps;
}

export interface ISpacerProps {
  spacing?: IBreakpointProps;
}

const Spacer = styled.div<ISpacerProps>`
  box-sizing: border-box;
  border: 1px solid red;

  ${p =>
    p.spacing &&
    Object.keys(p.spacing).map(spacer => {
      const s = spacer as keyof IBreakpointProps;
      const spacers = css`
        @media (min-width: ${theme.breakpoints[s]}px) {
          ${p.spacing && p.spacing[s]?.m && `margin: ${p.spacing[s]?.m}rem;`}
          ${p.spacing && p.spacing[s]?.mt && `margin-top: ${p.spacing[s]?.mt}rem;`}
          ${p.spacing && p.spacing[s]?.mr && `margin-right: ${p.spacing[s]?.mr}rem;`}
          ${p.spacing && p.spacing[s]?.ml && `margin-left: ${p.spacing[s]?.ml}rem;`}
          ${p.spacing && p.spacing[s]?.mb && `margin-bottom: ${p.spacing[s]?.mb}rem;`}
          ${p.spacing && p.spacing[s]?.p && `padding: ${p.spacing[s]?.p}rem;`}
          ${p.spacing && p.spacing[s]?.pt && `padding-top: ${p.spacing[s]?.pt}rem;`}
          ${p.spacing && p.spacing[s]?.pr && `padding-right: ${p.spacing[s]?.pr}rem;`}
          ${p.spacing && p.spacing[s]?.pl && `padding-left: ${p.spacing[s]?.pl}rem;`}
          ${p.spacing && p.spacing[s]?.pb && `padding-bottom: ${p.spacing[s]?.pb}rem;`}
        }
      `;
      console.log(spacers);
      return spacers;
    })}
`;

export default Spacer;
