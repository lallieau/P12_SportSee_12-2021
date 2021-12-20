import styled from 'styled-components';
// import helper function to format the 'kind' of activity correctly
import {formatKind} from '../../helpers/formatting';
// import helper function to reverse activity correctly
import {reverseActivityOrder} from '../../helpers/reverseActivityOrder';
import PropTypes from 'prop-types';
import {
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
} from 'recharts';

/**
 * CSS for the component using styled.components
 */
const PerformanceWrapper = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  width: 100%;
  position: relative;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Renders Performance Radar chart
 * @param {object} performanceData
 * @returns {JSX}
 */
export const Performance = ({performanceData}) => {
  return (
    <PerformanceWrapper>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart
          cy="50%"
          cx="50%"
          outerRadius="60%"
          data={reverseActivityOrder(performanceData)}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
            stroke="#fff"
            tickLine={false}
            style={{fontSize: '12px', fontWeight: '500'}}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </PerformanceWrapper>
  );
};

// PropTypes
Performance.propTypes = {
  performanceData: PropTypes.array,
};
