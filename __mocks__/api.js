const get = async (action, data) => {
  try {
    if (data !== undefined) {
      const json = await {response: {propostas: 'propostas'}};
      return Promise.resolve(json);
    }
    throw 'error';
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {get};
