import {NativeModules} from 'react-native';
import {BBRequest} from 'mov-react-native-connector';

const base = `https://${NativeModules.BBRNNativeConstants.GRAFENO_SERVER}`;

const get = async (action, data = {}) => {
  try {
    const json = await BBRequest.get(base + action, data, {Host: 'Grafeno'});
    return Promise.resolve(json);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {get};
