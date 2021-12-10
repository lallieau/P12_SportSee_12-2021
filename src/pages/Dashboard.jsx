import styled from 'styled-components';
import {colors} from '../utils/style/colors';
import {SEO} from '../utils/style/SEO';

import {Layout} from '../components/Layout';
import {SideNavigationBar} from '../components/Navigation/SideNavigationBar';
import {KeyData} from '../components/Statistics/KeyData';
import {Activity} from '../components/Statistics/Activity';
import {AverageSession} from '../components/Statistics/AverageSession';
import {Performance} from '../components/Statistics/Performance';
import {ScoreDay} from '../components/Statistics/ScoreDay';

const DashboardLayout = styled.main`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem) 1fr;
  }
`;

const Header = styled.div`
  padding-bottom: 30px;
`;
const HeaderTitle = styled.h1``;
const HeaderText = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;
const UserName = styled.span`
  color: ${colors.primary};
`;
const Contents = styled.div`
  min-height: 90vh;
  padding: clamp(1.625rem, 3.5vw, 6.5rem);
  padding-top: 1rem;
`;
const Statistics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`;
const StatisticsGraphics = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  display: grid;
  gap: 24px;
`;
const Analysis = styled.div`
  grid-area: 3 / 1 / 5 / 4;
  display: flex;
  grid-column-gap: 24px;
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
      <KeyData />
    </Statistics>
  );
};

export const Dashboard = () => {
  return (
    <>
      <SEO title="Dashboard" description="Bienvenue sur votre Dashboard" />
      <Layout title={'Dashboard de Thomas'}>
        <DashboardLayout>
          <SideNavigationBar />
          <Contents>
            <Heading />
            <UserStats />
          </Contents>
        </DashboardLayout>
      </Layout>
    </>
  );
};
