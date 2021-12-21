const baseUrl = 'http://localhost:3000';

/**
 * Service to fetch data
 * @param {string} path
 * @returns {object} response
 */
export const fetchApi = async path => {
  const response = await fetch(`${baseUrl}/${path}`);
  return await response.json();
};
