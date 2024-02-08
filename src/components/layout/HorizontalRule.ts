import { styled } from 'styled-components';
import theme from '../../styles/theme';

interface IHorizontalRuleProps {
  $color?: keyof typeof theme.colors;
}

const HorizontalRule = styled.hr<IHorizontalRuleProps>`
  margin: 0;
  border: 0;
  border: 1px solid ${props => theme.colors[props.$color || 'neutral300']};
  margin: ${theme.gutterWidth}rem 0;
`;

export default HorizontalRule;
