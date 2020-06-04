import { ENV_ENDPOINT } from '../../../config/default';
export const setEndpoint = () => {
  if (process.env.NODE_ENV === 'development') {
    return ENV_ENDPOINT.DEV_POINT;
  } else {
    return ENV_ENDPOINT.PROD_POINT;
  }
};

// Showing online users container on large devices
export const handleResizeWindow = () => {
  if (window.innerWidth >= '768') {
    document.getElementById('onlineUsersBox').style.display = 'inline-block';
  } else {
    document.getElementById('onlineUsersBox').style.display = 'none';
  }
};

// Showing online users container
export const handleShowOnlineUsers = () => {
  document.getElementById('onlineUsersBox').style.display = 'block';
};

// Hiding online users container
export const handleCloseOnlineUsers = () => {
  document.getElementById('onlineUsersBox').style.display = 'none';
};
