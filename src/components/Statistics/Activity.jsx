import styled from 'styled-components';
import {formatDate} from '../../utils/Formatting';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ActivityWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 4;
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: 5px;
  padding 0.625rem;
`;
const Heading = styled.div`
  align-items: center;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-left: 2.188rem;
  margin-right: 2.188rem;
`;
const Legend = styled.div`
  align-items: center;
  display: flex;
  margin-right: 1.313rem;
  color: ${props => props.theme.colors.third};
  font-size: 0.8rem;
`;

const Bullet = styled.span`
  color: ${props =>
    props.isFirstBullet
      ? props.theme.colors.black
      : props.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: 500;
`;

const ToolTipLabel = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 0.726rem;
  font-weight: 500;
  margin: 0.313rem;
  padding: 0.313rem;
`;

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} kCal`}</p>
        <p>{`${payload[1].value} Kg`}</p>
      </ToolTipLabel>
    );
  }
  return null;
};

const ActivityGraphics = ({activity}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart barGap={5} width="100%" data={activity}>
        <XAxis
          dataKey="day"
          tickFormatter={formatDate}
          tickLine={false}
          style={{fontSize: '14px'}}
          stroke="#9B9EAC"
          strokeDasharray="0"
        />
        <YAxis
          yAxisId="poids"
          stroke="#9B9EAC"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickCount="3"
          type="number"
          domain={['dataMin -3', 'auto']}
          style={{fontSize: '14px'}}
        />
        <YAxis
          yAxisId="calories"
          tick={false}
          orientation="left"
          axisLine={false}
          tickLine={false}
          domain={['dataMin -10', 'dataMax + 10']}
        />
        <Tooltip
          dy={4}
          content={<CustomTooltip />}
          cursor={{fill: 'rgba(196, 196, 196, 0.5)'}}
        />
        <CartesianGrid stroke="#DEDEDE" strokeDasharray="3" vertical={false} />
        <Bar
          yAxisId="calories"
          name="kCal"
          dataKey="calories"
          fill="#000"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="poids"
          name="kg"
          dataKey="kilogram"
          fill="#FF0000"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ActivityHeading = () => {
  return (
    <Heading>
      <Title>Activité quotidienne</Title>
      <Legend>
        <Bullet isFirstBullet>•</Bullet> Poids (Kg)
        <Bullet>•</Bullet> Calories brûlées (kCal)
      </Legend>
    </Heading>
  );
};

export const Activity = ({activityData}) => {
  return (
    <ActivityWrapper>
      <ActivityHeading />
      <ActivityGraphics activity={activityData} />
    </ActivityWrapper>
  );
};
