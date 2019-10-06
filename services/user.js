// user.js
import request from './requestn';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
