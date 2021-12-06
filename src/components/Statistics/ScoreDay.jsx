import {ResponsiveContainer, RadialBarChart, RadialBar, Legend} from 'recharts';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const ScoreDayWrapper = styled.div`
  background: ${colors.primary};
  border-radius: 5px;
  height: 14.063rem;
  width: 100%;
  position: relative;
  padding: 10px;
`;

const AverageHeading = styled.h2`
  color: ${colors.third};
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 500;
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

const Score = 0.12;

export const ScoreDay = () => {
  return (
    <ScoreDayWrapper>
      <AverageHeading>Durée moyenne des sessions</AverageHeading>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={700}
          height={350}
          startAngle={90}
          endAngle={450}
          innerRadius={50}
          outerRadius={110}
          barSize={10}
          data={Score}>
          <RadialBar cornerRadius={50} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </ScoreDayWrapper>
  );
};
