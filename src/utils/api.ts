import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  try {
    const { data } = await axios.get('https://crossorigin.me/https://zenquotes.io/api/random');
    const quoteData = data[0]; // Get the first item from the array
    return {
      quote: `“${quoteData.q}” — ${quoteData.a}`,
    };
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return {
      quote: 'Could not fetch a quote at this time.',
    };
  };
};
