const baseUrl = 'http://localhost:3000';

export const fetchApi = async path => {
  const response = await fetch(`${baseUrl}/${path}`);
  return await response.json();
};
