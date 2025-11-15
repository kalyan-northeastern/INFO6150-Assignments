// Session management utilities

const SESSION_KEY = 'jobPortalSession';

export const saveSession = (userData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

export const getSession = () => {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const isAuthenticated = () => {
  return getSession() !== null;
};

