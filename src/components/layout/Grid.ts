import styled from 'styled-components';
import theme from '../../styles/theme';

interface IGridProps {
  $fluid?: boolean;
  children?: React.ReactNode;
}

const Grid = styled.div<IGridProps>`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${theme.gutterWidth + 'rem'};
  padding-left: ${theme.gutterWidth + 'rem'};
  height: 100%;

  ${p =>
    !p.$fluid &&
    `@media (min-width: ${theme.breakpoints.sm}px) {
      width: ${theme.container.sm}rem;
    }
    @media (min-width: ${theme.breakpoints.md}px) {
      width: ${theme.container.md}rem;
    }
    @media (min-width: ${theme.breakpoints.lg}px) {
      width: ${theme.container.lg}rem;
    }
    @media (min-width: ${theme.breakpoints.xl}px) {
      width: ${theme.container.xl}rem;
    }
  `}
`;

export default Grid;
