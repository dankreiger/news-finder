import { mockData } from '../../static/dummyData/mockData';

export default async query => {
  return await new Promise(resolve => {
    resolve(mockData.articles);
  });
};
