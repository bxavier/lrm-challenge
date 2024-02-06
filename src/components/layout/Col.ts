import styled from 'styled-components';
import { config } from '../config';

interface IColProps {
  xs?: number | false;
  sm?: number;
  md?: number;
  lg?: number;
  reverse?: boolean;
  children: React.ReactNode;
}

function getFlexBasis(grid: number | false) {
  return grid === false
    ? `display: none;`
    : `flex: 0 0 ${(grid / config.grid) * 100}%;
`;
}

const Col = styled.div<IColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${config.gutterWidth}rem;
  padding-left: ${config.gutterWidth}rem;
  border: 1px solid red;

  ${p =>
    p.reverse &&
    `
    flex-direction: column-reverse;
  `}

  ${p =>
    p.xs &&
    `@media (min-width: ${config.breakpoints.xs}px) {
      ${getFlexBasis(p.xs)};
    }`}

  ${p =>
    p.sm &&
    `@media (min-width: ${config.breakpoints.sm}px) {
      ${getFlexBasis(p.sm)};
    }`}
  
  ${p =>
    p.md &&
    `@media (min-width: ${config.breakpoints.md}px) {
      ${getFlexBasis(p.md)};
    }`}

  ${p =>
    p.lg &&
    `@media (min-width: ${config.breakpoints.lg}px) {
      ${getFlexBasis(p.lg)};
    }`}
`;

export default Col;
