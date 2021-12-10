import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import {
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
} from 'recharts';

const PerformanceWrapper = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background: #282d30;
  border-radius: 5px;
  width: 100%;
  position: relative;
  // height: 100%;
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

const TransformKind = tickItem => {
  const Kind = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  if (tickItem) return Kind[tickItem - 1];
};

const reverseActivityOrder = [...data].sort((a, b) => b.kind - a.kind);

export const Performance = () => {
  return (
    <PerformanceWrapper>
      <ResponsiveContainer width="100%" height={220}>
        <RadarChart
          outerRadius={90}
          data={reverseActivityOrder}
          width="100%"
          height="100%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={TransformKind}
            stroke={`${colors.third}`}
            tickLine={false}
            style={{fontSize: '12px', fontWeight: '500'}}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill={colors.primary}
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </PerformanceWrapper>
  );
};
