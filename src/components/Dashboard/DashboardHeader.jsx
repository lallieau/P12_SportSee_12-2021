import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const HeadingWrapper = styled.div`
  p {
    font-weight: 400;
    font-size: 1rem;
  }
  span {
    color: ${colors.primary};
  }
`;

export const DashboardHeader = () => {
  return (
    <HeadingWrapper>
      <h1>
        Bonjour <span>Thomas</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </HeadingWrapper>
  );
};
