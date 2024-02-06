import { config } from '../config';
import styled from 'styled-components';

interface IRowProps {
  reverse?: boolean;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  around?: boolean;
  between?: boolean;
  first?: boolean;
  last?: boolean;
  children?: React.ReactNode;
}

const Row = styled.div<IRowProps>`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${config.gutterWidth * -1}rem;
  margin-left: ${config.gutterWidth * -1}rem;
  border: 1px solid red;

  ${p => p.reverse && `flex-direction: row-reverse;`}
  ${p => p.start && `justify-content: flex-start;`}
  ${p => p.center && `justify-content: center; `}
  ${p => p.end && `justify-content: flex-end; `}
  ${p => p.top && `align-items: flex-start; `}
  ${p => p.middle && `align-items: center;`}
  ${p => p.bottom && `align-items: flex-end;`}
  ${p => p.around && `justify-content: space-around;`}
  ${p => p.between && `justify-content: space-between;`}
  ${p => p.first && `order: -1;`}
  ${p => p.last && `order: 1;`}
`;

export default Row;
