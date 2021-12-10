import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import {reverseActivityOrder, formatKind} from '../../utils/Formatting';
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

export const Performance = ({performanceData}) => {
  return (
    <PerformanceWrapper>
      <ResponsiveContainer width="100%" height={220}>
        <RadarChart
          outerRadius={90}
          data={reverseActivityOrder(performanceData)}
          width="100%"
          height="100%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
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
