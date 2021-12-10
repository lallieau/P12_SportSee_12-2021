import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

const data = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 23,
  },
  {
    day: 3,
    sessionLength: 45,
  },
  {
    day: 4,
    sessionLength: 50,
  },
  {
    day: 5,
    sessionLength: 0,
  },
  {
    day: 6,
    sessionLength: 0,
  },
  {
    day: 7,
    sessionLength: 60,
  },
];

const AverageSessionWrapper = styled.div`
  grid-area: 3 / 1 / 5 / 2;
  background: ${colors.primary};
  border-radius: 5px;
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

const ToolTipLabel = styled.label`
  background: ${colors.third};
  color: ${colors.secondary};
  font-size: 0.438rem;
  font-weight: 500;
  height: 1.25rem;
  line-height: 0.25rem;
  padding: 0.125rem;
  width: 1.563rem;
`;

const TransformDay = tickItem => {
  const Day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  if (tickItem) return Day[tickItem - 1];
};

const CustomTooltip = ({active, payload}) => {
  if (active && payload) {
    return <ToolTipLabel>{`${payload[0].value} min`}</ToolTipLabel>;
  }
  return null;
};

export const AverageSession = () => {
  return (
    <AverageSessionWrapper>
      <AverageHeading>Durée moyenne des sessions</AverageHeading>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          width="100%"
          height="100%"
          data={data}
          margin={{top: 0, right: 8, bottom: 0, left: -53}}>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="day"
            tickFormatter={TransformDay}
            stroke={`${colors.third}`}
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
              stroke: `${colors.secondary}`,
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
            name="average session"
            type="monotone"
            dataKey="sessionLength"
            stroke={`${colors.third}`}
            strokeWidth={2}
            dot={false}
            activeDot={{r: 3, strokeWidth: 9, strokeOpacity: 0.3}}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionWrapper>
  );
};
