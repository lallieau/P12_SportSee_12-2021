import styled from 'styled-components';
import Yoga from '../../assets/icon-bike.svg';
import {colors} from '../../utils/style/colors';

const ElementsWrapper = styled.div``;
const ElementCard = styled.div`
  display: flex;
  background-color: ${colors.lightBackground};
  border-radius: 5px;
  padding: 10px;
`;
const ElementValue = styled.div``;

export const KeyFigures = () => {
  return (
    <ElementsWrapper>
      <ElementCard>
        <img src={Yoga} alt="" />
        <ElementValue>
          {'Value'}
          <p>Catégorie</p>
        </ElementValue>
      </ElementCard>
    </ElementsWrapper>
  );
};
