import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const ScoreDayWrapper = styled.div`
  grid-area: 3 / 3 / 5 / 4;
  border-radius: 5px;
  // height: 100%
  width: 100%;
  position: relative;
  padding: 10px;
  background: ${colors.lightBackground};
`;

const ScoreHeading = styled.h2`
  color: ${colors.secondary};
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 500;
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

export const ScoreDay = ({score}) => {
  const scoreValue = [
    {value: 1, fill: colors.lightBackground},
    {value: score.todayScore, fill: '#FF0000'},
  ];

  return (
    <ScoreDayWrapper>
      <ScoreHeading>Score</ScoreHeading>
      <ResponsiveContainer width="100%" height={220}>
        <RadialBarChart
          width="100%"
          height="100%"
          startAngle={90}
          endAngle={450}
          innerRadius={50}
          outerRadius={110}
          barSize={12}
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
