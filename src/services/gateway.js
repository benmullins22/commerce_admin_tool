import axios from 'axios';
import config from '../config';

const { host, testHost, authorizationPath, uploadPath } = config.gateway;
const ui = config.ui;

const apiRequest = (url, options = {}, authToken) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*'
  };

  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return axios(
    Object.assign(
      {},
      {
        url,
        timeout: 12000,
        headers
      },
      options
    )
  );
};

const captureAndReject = (err) => {
  console.error({ err });
  return Promise.reject(err);
};

export default {
  authorize: (code, state, redirectUri) => {
    return apiRequest(`${host}${authorizationPath}`, {
      method: 'POST',
      data: {
        state,
        redirectUri,
        code
      }
    })
      .catch(captureAndReject)
      .then((response) => {
        return response.data;
      });
  }
};