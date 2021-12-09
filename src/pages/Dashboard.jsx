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
  flex-direction: column-reverse;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem) 1fr;
  }
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
  min-height: 100vh;
  padding: clamp(0.625rem, 1.5vw, 4.5rem);
`;
const Statistics = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
const StatisticsGraphics = styled.div`
  @media screen and (min-width: 1024px) {
    width: 75%;
  }
`;
const Analysis = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  margin: 1.25rem 0rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 1.25rem 0rem 0rem;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 4.375rem;
  }
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
