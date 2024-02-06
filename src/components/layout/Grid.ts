import styled from 'styled-components';
import { config } from '../config';

interface IGridProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

const Grid = styled.div<IGridProps>`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${config.gutterWidth + 'rem'};
  padding-left: ${config.gutterWidth + 'rem'};
  height: 100%;

  ${p =>
    !p.fluid &&
    `@media (min-width: ${config.breakpoints.sm}px) {
      width: ${config.container.sm}rem;
    }
    @media (min-width: ${config.breakpoints.md}px) {
      width: ${config.container.md}rem;
    }
    @media (min-width: ${config.breakpoints.lg}px) {
      width: ${config.container.lg}rem;
    }
  `}
`;

export default Grid;
