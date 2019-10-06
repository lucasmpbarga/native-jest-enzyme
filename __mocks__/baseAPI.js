const get = async (action, data) => {
  try {
    if (data !== undefined) {
      const json = await ('json', 10);
      return Promise.resolve(json);
    }
    throw 'error';
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {get};
