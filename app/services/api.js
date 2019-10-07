import {NativeModules} from 'react-native';

const base = `https://${NativeModules.SERVER}`;

const get = async (action, data = {}) => {
  try {
    const json = await base.get(base + action, data, {Host: 'LocalHost'});
    return Promise.resolve(json);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {get};
