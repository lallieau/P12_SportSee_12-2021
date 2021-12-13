import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {formatDay} from '../../utils/Formatting';
import styled from 'styled-components';

const AverageSessionWrapper = styled.div`
  grid-area: 3 / 1 / 5 / 2;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  width: 100%;
  position: relative;
  padding: 0.625rem;
`;

const AverageHeading = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 1.125rem;
  font-weight: 500;
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

const ToolTipLabel = styled.label`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-size: 0.726rem;
  font-weight: 500;
  height: 1.25rem;
  line-height: 0.25rem;
  padding: 0.525rem;
  width: 1.563rem;
`;

const CustomTooltip = ({active, payload}) => {
  if (active && payload) {
    return <ToolTipLabel>{`${payload[0].value} min`}</ToolTipLabel>;
  }
  return null;
};

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
