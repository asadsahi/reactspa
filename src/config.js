const isDev = process.env.NODE_ENV === 'development';

const devConfig = {
  stsUrl: 'https://aspnetcorests.herokuapp.com',
  apiUrl: 'https://aspnetcorespa.herokuapp.com',
};
const prodConfig = {
  stsUrl: 'https://aspnetcorests.herokuapp.com',
  apiUrl: 'https://aspnetcorespa.herokuapp.com',
};

export const config = isDev ? devConfig : prodConfig;
