import request from '../services/requestApi';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
