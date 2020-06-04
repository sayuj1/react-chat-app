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
