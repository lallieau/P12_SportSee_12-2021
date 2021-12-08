import styled from 'styled-components';
import {SideNavigationBar} from '../components/Navigation/SideNavigationBar';
import {KeyFigures} from '../components/Statistics/KeyFigures';
import {Activity} from '../components/Statistics/Activity';
import {AverageSession} from '../components/Statistics/AverageSession';
import {Performance} from '../components/Statistics/Performance';
import {ScoreDay} from '../components/Statistics/ScoreDay';
import {Layout} from '../components/Layout';
import {colors} from '../utils/style/colors';

const DashboardLayout = styled.main`
  display: flex;
`;

const Header = styled.div``;
const HeaderTitle = styled.h1``;
const HeaderText = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;
const UserName = styled.span`
  color: ${colors.primary};
`;
const Contents = styled.div`
  //margin: 90px 50px 0px;
`;
const Statistics = styled.div`
  display: flex;
`;
const StatisticsGraphics = styled.div``;
const Analysis = styled.div`
  display: flex;
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

const UserStats = () => {
  return (
    <Statistics>
      <StatisticsGraphics>
        <Activity />
        <Analysis>
          <AverageSession />
          <Performance />
          <ScoreDay />
        </Analysis>
      </StatisticsGraphics>
      <KeyFigures />
    </Statistics>
  );
};

export const Dashboard = () => {
  return (
    <Layout title={'Dashboard de Thomas'}>
      <DashboardLayout>
        <SideNavigationBar />
        <Contents>
          <Heading />
          <UserStats />
        </Contents>
      </DashboardLayout>
    </Layout>
  );
};
