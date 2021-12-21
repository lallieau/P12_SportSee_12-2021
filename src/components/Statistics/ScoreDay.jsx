import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * CSS for the component using styled.components
 */
const ScoreDayWrapper = styled.div`
  grid-area: 3 / 3 / 5 / 4;
  border-radius: 5px;
  width: 100%;
  position: relative;
  padding: 0.625rem;
  background: ${({theme}) => theme.colors.lightBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScoreHeading = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

const ScoreLegend = styled.div`
  background: ${({theme}) => theme.colors.white};
  text-align: center;
  border-radius: 50%;
  position: absolute;
  height: 8.125rem;
  width: 8.125rem;
  z-index: 1;
`;
const ScorePercentage = styled.p`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
  margin: 1.528rem 0rem 0rem 0rem;
`;
const ScoreText = styled.p`
  color: ${({theme}) => theme.colors.third};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  line-height: 1.25rem;
  margin: 0rem;
`;

/**
 * Renders the user's score on a RadialBarChart
 * @param {number} score
 * @returns {JSX}
 */
export const ScoreDay = ({score}) => {
  const scoreValue = [
    {value: 1, fill: 'transparent'},
    {value: score, fill: '#FF0000'},
  ];

  return (
    <ScoreDayWrapper>
      <ScoreHeading>Score</ScoreHeading>
      <ScoreLegend>
        <ScorePercentage>{100 * score}%</ScorePercentage>
        <ScoreText>
          de votre <br />
          objectif{' '}
        </ScoreText>
      </ScoreLegend>
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          startAngle={90}
          endAngle={500}
          innerRadius={40}
          outerRadius={100}
          barSize={10}
          data={scoreValue}>
          <RadialBar
            cornerRadius={50}
            dataKey="value"
            background={{fill: '#FCFCFC'}}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </ScoreDayWrapper>
  );
};

// PropTypes
ScoreDay.propTypes = {
  score: PropTypes.number,
};
