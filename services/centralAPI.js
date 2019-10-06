import residencialApolicesMock from '../__mocks__/jsons/propostas';
import {hasToken} from '../services/storedAppData';
import baseAPI from '../services/baseAPI';

export const getResidencialApolices = async (cpf = undefined) => {
  if (!hasToken()) {
    return residencialApolicesMock.propostas;
  }
  try {
    const result = await baseAPI.get(
      '/cfe-als/api/v1/proposta/residencial/buscar-propostas',
      cpf,
    );
    return result.response.propostas;
  } catch (error) {
    return error;
  }
};
