import styled from 'styled-components';
import {DashboardHeader} from '../components/Dashboard/DashboardHeader';
import {Layout} from '../components/Layout';

import {SideNav} from '../components/Nav/SideNav';

const DashboardWrapper = styled.div`
  display: flex;
`;

const InfosWrapper = styled.div``;

export const Dashboard = () => {
  return (
    <>
      <Layout>
        <DashboardWrapper>
          <SideNav />
          <InfosWrapper>
            <h1>Dashboard</h1>
            <DashboardHeader />
          </InfosWrapper>
        </DashboardWrapper>
      </Layout>
    </>
  );
};
