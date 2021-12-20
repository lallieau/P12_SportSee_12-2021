import {useEffect, useState} from 'react';
import {fetchApi} from '../utils/fetchApi';

export const useUserData = userId => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function getUserData(userId) {
    const user = await fetchApi(`user/${userId}`);
    const userActivity = await fetchApi(`user/${userId}/activity`);
    const userAverage = await fetchApi(`user/${userId}/average-sessions`);
    const userPerformance = await fetchApi(`user/${userId}/performance`);

    setData({
      ...user.data,
      score: user.data.score,
      activity: userActivity.data.sessions,
      average: userAverage.data.sessions,
      performance: userPerformance.data.data,
    });
    setLoading(false);
  }

  useEffect(() => {
    getUserData(userId);
  }, [userId]);

  return {loading, data};
};
