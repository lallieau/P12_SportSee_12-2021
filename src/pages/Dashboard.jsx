import styled from 'styled-components';
import {DashboardHeader} from '../components/Dashboard/DashboardHeader';
import {TopNav} from '../components/Nav/TopNav';
import {SideNav} from '../components/Nav/SideNav';
import {KeyFigures} from '../components/Dashboard/KeyFigures';
import {Activity} from '../components/Dashboard/Activity';
import {AverageSession} from '../components/Dashboard/AverageSession';
import {Performance} from '../components/Dashboard/Performance';
import {ScoreDay} from '../components/Dashboard/ScoreDay';

const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const InfosWrapper = styled.div`
  margin-top: 8rem;
  margin-left: 5rem;
  margin-right: 5rem;
  width: 100%;
`;

const UserStats = styled.div`
  display: flex;
`;

const StatsGraphics = styled.div`
  width: 100%;
`;

const KeyFiguresWrapper = styled.div``;

const Analysis = styled.div`
  display: flex;
`;

export const Dashboard = () => {
  return (
    <>
      <TopNav />

      <DashboardWrapper>
        <SideNav />

        <InfosWrapper>
          <DashboardHeader />

          <UserStats>
            <StatsGraphics>
              <Activity />

              <Analysis>
                <AverageSession />
                <Performance />
                <ScoreDay />
              </Analysis>
            </StatsGraphics>

            <KeyFiguresWrapper>
              <KeyFigures />
            </KeyFiguresWrapper>
          </UserStats>
        </InfosWrapper>
      </DashboardWrapper>
    </>
  );
};
