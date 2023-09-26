import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const getGitHubUserData = async (rodrigueslucas062) => {
  try {
    const response = await githubApi.get(`/users/${rodrigueslucas062}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
