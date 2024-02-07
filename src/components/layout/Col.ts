import styled from 'styled-components';
import theme from '../../styles/theme';

interface IColumn {
  xs?: number | false | undefined;
  sm?: number | false | undefined;
  md?: number | false | undefined;
  lg?: number | false | undefined;
}

interface IColProps {
  cols?: IColumn;
  reverse?: boolean;
  children: React.ReactNode;
}

function getFlexBasis(grid: number | false | undefined) {
  return !grid
    ? `display: none;`
    : `flex: 0 0 ${(grid / theme.grid) * 100}%;
`;
}

const Col = styled.div<IColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${theme.gutterWidth}rem;
  padding-left: ${theme.gutterWidth}rem;
  border: 1px solid red;

  ${p =>
    p.reverse &&
    `
    flex-direction: column-reverse;
  `}

  ${p =>
    p.cols &&
    Object.keys(p.cols).map(column => {
      return `
        @media (min-width: ${theme.breakpoints[column as keyof IColumn]}px) {
          ${p.cols && getFlexBasis(p.cols[column as keyof IColumn])}
        }
      `;
    })}
`;

export default Col;
