import policiesMock from '../../__mocks__/jsons/policies';
import {hasToken} from './appData';
import api from '../services/api';

export const getResidentialPolicies = async (cpf = undefined) => {
  if (!hasToken()) {
    return policiesMock.proposals;
  }
  try {
    const result = await api.get('/my-path', cpf);
    return result.response.proposals;
  } catch (error) {
    return error;
  }
};
