import styled from 'styled-components';
import {Layout} from '../components/Layout';
import {KeyData} from '../components/Statistics/KeyData';
import {Activity} from '../components/Statistics/Activity';
import {AverageSession} from '../components/Statistics/AverageSession';
import {Performance} from '../components/Statistics/Performance';
import {ScoreDay} from '../components/Statistics/ScoreDay';
import {useUserData} from '../hooks/useUserData';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Error} from '../pages/Error';

/**
 * CSS for the component using styled.components
 */
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

/**
 * Render the header of dashboard
 * @param {string} firstname
 * @returns {JSX}
 */
const Heading = ({firstname}) => {
  return (
    <Header>
      <HeaderTitle>
        Bonjour <UserName>{firstname}</UserName>
      </HeaderTitle>
      <HeaderText>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </HeaderText>
    </Header>
  );
};

/**
 * Renders the Statistics of a user
 * @param {object} user
 * @returns {JSX}
 */
const UserStats = ({activity, average, performance, keyData, score}) => {
  return (
    <Statistics>
      <StatisticsGraphics>
        <Activity activityData={activity} />
        <Analysis>
          <AverageSession averageData={average} />
          <Performance performanceData={performance} />
          <ScoreDay score={score} />
        </Analysis>
      </StatisticsGraphics>
      <KeyData keyData={keyData} />
    </Statistics>
  );
};

/**
 * Renders the Dashboard of a user with all their stats
 * @returns {JSX}
 */
export const Dashboard = () => {
  const {userId} = useParams();
  const {loading, error, user, activity, average, performance} =
    useUserData(userId);

  if (error) return <Error />;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Layout
        title={'Dashboard'}
        isSideNavigation
        description={'Bienvenue sur votre Dashboard'}>
        <Contents>
          <Heading firstname={user.userInfos.firstName} />
          <UserStats
            activity={activity}
            average={average}
            performance={performance}
            keyData={user.keyData}
            score={user.score}
          />
        </Contents>
      </Layout>
    </>
  );
};

// PropTypes
Heading.propTypes = {
  firstName: PropTypes.string,
};

UserStats.propTypes = {
  user: PropTypes.object,
};
