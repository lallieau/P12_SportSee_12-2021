import {
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const PerformanceWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 5px;
  height: 14.063rem;
  width: 100%;
  position: relative;
  padding: 10px;
`;

const data = [
  {
    value: 80,
    kind: 1,
  },
  {
    value: 120,
    kind: 2,
  },
  {
    value: 140,
    kind: 3,
  },
  {
    value: 50,
    kind: 4,
  },
  {
    value: 200,
    kind: 5,
  },
  {
    value: 90,
    kind: 6,
  },
];

// const TransformKind = tickItem => {
//   const Kind = [
//     {
//       1: 'cardio',
//       2: 'energy',
//       3: 'endurance',
//       4: 'strength',
//       5: 'speed',
//       6: 'intensity',
//     },
//   ];
//   if (tickItem) return Kind[tickItem - 1];
// };

export const Performance = () => {
  return (
    <PerformanceWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />

          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </PerformanceWrapper>
  );
};
