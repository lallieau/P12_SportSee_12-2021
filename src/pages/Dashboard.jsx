import styled from 'styled-components';
import {Layout} from '../components/Layout';
import {KeyData} from '../components/Statistics/KeyData';
import {Activity} from '../components/Statistics/Activity';
import {AverageSession} from '../components/Statistics/AverageSession';
import {Performance} from '../components/Statistics/Performance';
import {ScoreDay} from '../components/Statistics/ScoreDay';
import {useMockData} from '../hooks/UseMockData';

const Header = styled.div`
  padding-bottom: 1.875;
`;
const HeaderTitle = styled.h1``;
const HeaderText = styled.p`
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.sm};
`;
const UserName = styled.span`
  color: ${({theme}) => theme.colors.primary};
`;
const Contents = styled.div`
  min-height: 90vh;
  padding: 2.5rem;
  padding-top: 1rem;
`;
const Statistics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
`;
const StatisticsGraphics = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  display: grid;
  gap: 1.5rem;
`;
const Analysis = styled.div`
  grid-area: 3 / 1 / 5 / 4;
  display: flex;
  grid-column-gap: 1.5rem;
`;

const Heading = () => {
  return (
    <Header>
      <HeaderTitle>
        Bonjour <UserName>Thomas</UserName>
      </HeaderTitle>
      <HeaderText>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </HeaderText>
    </Header>
  );
};

const UserStats = ({user}) => {
  return (
    <Statistics>
      <StatisticsGraphics>
        <Activity activityData={user.activities} />
        <Analysis>
          <AverageSession averageData={user.averages} />
          <Performance performanceData={user.performances} />
          <ScoreDay score={user.score} />
        </Analysis>
      </StatisticsGraphics>
      <KeyData keyData={user.keyData} />
    </Statistics>
  );
};

export const Dashboard = () => {
  const userData = useMockData();

  return (
    <>
      <Layout
        title={'Dashboard'}
        isSideNavigation
        description={'Bienvenue sur votre Dashboard'}>
        <Contents>
          <Heading />
          <UserStats user={userData} activity={userData} />
        </Contents>
      </Layout>
    </>
  );
};
