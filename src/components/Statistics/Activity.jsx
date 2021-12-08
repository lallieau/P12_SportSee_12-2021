import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240,
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220,
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280,
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290,
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160,
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162,
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 390,
  },
];

const ActivityWrapper = styled.div`
  background-color: ${colors.lightBackground};
  border-radius: 5px;
  padding 10px;
  margin-bottom: 10px;
`;
const ActivityTitle = styled.p``;
const ActivityHeading = styled.div``;

const TransformDate = tickItem => {
  let formattedDate = '';

  if (tickItem) {
    let parts = tickItem.split('-');
    formattedDate = `${parts[2].replace(/^0+/, '')}`;
  }
  return formattedDate;
};

const ActivityGraphics = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart barGap={5} width="100%" data={data}>
        <XAxis
          dataKey="day"
          tickFormatter={TransformDate}
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
          content={''}
          cursor={{fill: 'rgba(196, 196, 196, 0.5)'}}
        />
        <CartesianGrid stroke="#DEDEDE" strokeDasharray="3" vertical={false} />
        <Bar
          yAxisId="calories"
          name="kCal"
          dataKey="calories"
          fill={colors.secondary}
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="poids"
          name="kg"
          dataKey="kilogram"
          fill={colors.primary}
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const Activity = () => {
  return (
    <ActivityWrapper>
      <ActivityHeading>
        <ActivityTitle>Activité quotidienne</ActivityTitle>
      </ActivityHeading>
      <ActivityGraphics />
    </ActivityWrapper>
  );
};
