import { users } from '../data/users';

export const authenticateUser = (username, password) => {
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
  return false;
};
