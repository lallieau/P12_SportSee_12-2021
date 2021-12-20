import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
// import helper function to format the day correctly
import {formatDay} from '../../helpers/formatting';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * CSS for the component using styled.components
 */
const AverageSessionWrapper = styled.div`
  grid-area: 3 / 1 / 5 / 2;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  width: 100%;
  position: relative;
  padding: 0.625rem;
`;

const AverageHeading = styled.h2`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

const ToolTipLabel = styled.label`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  height: 1.25rem;
  line-height: 0.25rem;
  padding: 0.525rem;
  width: 1.563rem;
`;

/**
 * Renders the tooltip (minutes) information when user hovers on the line chart
 * @param {boolean} active
 * @param {array} payload
 * @returns {JSX}
 */
const CustomTooltip = ({active, payload}) => {
  if (active && payload) {
    return <ToolTipLabel>{`${payload[0].value} min`}</ToolTipLabel>;
  }
  return null;
};

/**
 * Renders Average Sessions Line Chart
 * @param {array} averageData
 * @returns {JSX}
 */
export const AverageSession = ({averageData}) => {
  return (
    <AverageSessionWrapper>
      <AverageHeading>Durée moyenne des sessions</AverageHeading>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={averageData}
          margin={{top: 0, right: 8, bottom: 0, left: -53}}>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="day"
            tickFormatter={formatDay}
            stroke="#fff"
            style={{
              fontSize: '12px',
              fontWeight: '500',
              opacity: '0.8',
            }}
          />
          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            tick={false}
            domain={['dataMin -2', 'dataMax + 20']}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: '#000',
              strokeOpacity: 0.1,
              strokeWidth: '45',
            }}
          />
          <CartesianGrid
            strokeDasharray="0"
            horizontal={false}
            vertical={false}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{r: 3, strokeWidth: 9, strokeOpacity: 0.3}}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionWrapper>
  );
};

// PropTypes
AverageSession.propTypes = {
  averageData: PropTypes.array,
};
