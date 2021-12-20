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
  const activity = userData.activities.map(activity => activity);
  const average = userData.averages.map(average => average);
  const performance = userData.performances.map(performance => performance);
  const score = userData.todayScore;
  const keyData = userData.keyData;

  return {activity, average, performance, score, keyData};
};
