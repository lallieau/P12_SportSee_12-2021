import styled from 'styled-components';
import {colors} from '../utils/style/colors';

const TestTitle = styled.h2`
  color: ${colors.primary};
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

export const Test = ({title}) => {
  return (
    <>
      <TestTitle>{title}</TestTitle>
    </>
  );
};
