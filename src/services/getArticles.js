import axios from 'axios';
const apiKey = process.env.REACT_APP_NEWS_API_KEY

export default async q => {
  const response = await axios.get('https://newsapi.org/v2/everything', {
    params: { apiKey, q }
  });

  return response.data.articles;
};
