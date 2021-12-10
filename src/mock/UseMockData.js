import {userData} from './mockData';

export const useMockData = () => {
  const getActivity = userData.activities.map(activity => activity);
  const getAverage = userData.averages.map(average => average);
  const getPerformance = userData.performances.map(performance => performance);
  const getScore = userData.todayScore;
  const getKeyData = userData.keyData;

  return {getActivity, getAverage, getPerformance, getScore, getKeyData};
};
