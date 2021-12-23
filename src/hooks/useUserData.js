import {useEffect, useState} from 'react';
import {FetchApi} from '../utils/fetchApi';

/**
 * Hook to fetch data
 * @param {string} userId
 * @returns {object} data
 * @returns {boolean} loading
 */
export const useUserData = userId => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [average, setAverage] = useState(null);
  const [performance, setPerformance] = useState(null);

  async function getUserData(userId) {
    try {
      const userInfos = await FetchApi(`user/${userId}`);
      const userActivity = await FetchApi(`user/${userId}/activity`);
      const userAverage = await FetchApi(`user/${userId}/average-sessions`);
      const userPerformance = await FetchApi(`user/${userId}/performance`);

      setUser(userInfos.data);
      setActivity(userActivity.data.sessions);
      setAverage(userAverage.data.sessions);
      setPerformance(userPerformance.data.data);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData(userId);
  }, [userId]);

  return {loading, error, user, activity, average, performance};
};
