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
  background-color: ${({theme}) => theme.colors.lightBackground};
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
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-style: normal;
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
  line-height: 0;
`;
const ElementCategory = styled.p`
  color: ${({theme}) => theme.colors.third};
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
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
