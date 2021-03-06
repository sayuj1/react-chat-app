import { ENV_ENDPOINT } from '../../../config/default';
export const getEndpoint = () => {
  if (process.env.NODE_ENV === 'development') {
    return ENV_ENDPOINT.DEV_POINT;
  } else {
    return ENV_ENDPOINT.PROD_POINT;
  }
};
