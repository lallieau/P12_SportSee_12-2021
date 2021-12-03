import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const ActivityWrapper = styled.div`
  background-color: ${colors.lightBackground};
  width: 90%;
  height: 200px;
  border-radius: 5px;
  padding 10px;
  
  p {
    margin: 0;
  }
`;

export const Activity = () => {
  return (
    <ActivityWrapper>
      <p>Activité quotidienne</p>
    </ActivityWrapper>
  );
};
