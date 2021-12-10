import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

import calories from '../../assets/calories-icon.svg';
import proteines from '../../assets/protein-icon.svg';
import glucides from '../../assets/carbs-icon.svg';
import lipides from '../../assets/fat-icon.svg';

const data = {
  calorieCount: 1930,
  proteinCount: 155,
  carbohydrateCount: 290,
  lipidCount: 50,
};

const ElementsWrapper = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  color: #000;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  }
`;
const ElementCard = styled.div`
  display: flex;
  background-color: ${colors.lightBackground};
  border-radius: 5px;
  padding-left: 20px;

  align-items: center;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  // height: 4.375rem;
  // margin: 0.625rem;
  width: 100%;
`;
const Image = styled.img`
  height: 3.125rem;
  margin-left: 0.938rem;
  width: 3.125rem;

  @media screen and (min-width: 1024px) {
    height: 3.75rem;
    width: 3.75rem;
  }

  @media screen and (min-width: 455px) {
    flex: 1 1 15.625rem;
    margin: unset;
    min-width: 20.313rem;
  }

  @media screen and (min-width: 1024px) {
    flex: unset;
    height: 6.25rem;
    margin: unset;
    min-width: unset;
  }
`;
const ElementText = styled.div`
  margin-left: 1.5rem;
`;
const ElementValue = styled.p`
  font-size: clamp(1rem, 1.389vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: 0;
`;
const ElementCategory = styled.p`
  color: ${colors.SecondaryText};
  font-size: 0.875rem;
  font-weight: 500;
  margin: unset;
`;

export const KeyData = () => {
  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
  const icon = [calories, proteines, glucides, lipides];

  return (
    <ElementsWrapper>
      {categories.map((category, index) => {
        return (
          <ElementCard key={category}>
            <Image src={icon[index]} alt="" />
            <ElementText>
              <ElementValue>
                {Object.values(data)[index]}
                {index === 0 ? 'kCal' : 'g'}
              </ElementValue>
              <ElementCategory>{category}</ElementCategory>
            </ElementText>
          </ElementCard>
        );
      })}
    </ElementsWrapper>
  );
};
