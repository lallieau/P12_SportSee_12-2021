import styled from 'styled-components';
import calories from '../../assets/calories-icon.svg';
import proteines from '../../assets/protein-icon.svg';
import glucides from '../../assets/carbs-icon.svg';
import lipides from '../../assets/fat-icon.svg';

const ElementsWrapper = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  }
`;
const ElementCard = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: 5px;
  padding-left: 1.875rem;
  align-items: center;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  width: 100%;
`;
const Image = styled.img`
  height: 4.125rem;
  width: 4.125rem;
`;
const ElementText = styled.div`
  margin-left: 1.5rem;
`;
const ElementValue = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0;
`;
const ElementCategory = styled.p`
  color: ${props => props.theme.colors.third};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const KeyData = ({keyData}) => {
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
                {Object.values(keyData)[index]}
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
