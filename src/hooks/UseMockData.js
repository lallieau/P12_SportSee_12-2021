// import {useMemo} from 'react';

import {userData} from '../mock/mockData';

// export const useActivities = () => {
//   return useMemo(() => {
//     userData.activities.map(activity => activity);
//   }, []);
// };

//  hooks
// export const useAverages = () => {
//   return useMemo(() => userData.averages.map(average => average), []);
// };

export const useMockData = () => {
  const activities = userData.activities.map(activity => activity);
  const averages = userData.averages.map(average => average);
  const performances = userData.performances.map(performance => performance);
  const score = userData.todayScore;
  const keyData = userData.keyData;

  return {activities, averages, performances, score, keyData};
};
