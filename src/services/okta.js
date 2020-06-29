import configuration from '../config';
import uuid from 'react-uuid';
import gateway from './gateway';

const okta = {
  loginUrl: () => {
    sessionStorage.setItem('stateUUID', uuid());
    const scope = configuration.okta.scopes.join('+');
    const authQueryParams = new URLSearchParams({
      client_id: configuration.okta.clientId,
      response_type: 'code',
      redirect_uri: configuration.okta.redirectUri,
      state: sessionStorage.getItem('stateUUID')
    });
    return configuration.okta.issuer + '/v1/authorize?' + authQueryParams.toString() + '&scope=' + scope;
  },
  validateCode: async (code, stateUUID) => {
    const originalStateUUID = sessionStorage.getItem('stateUUID');
    const redirectUri = configuration.okta.redirectUri;
    if (stateUUID === originalStateUUID) {
      const authorization = await gateway.authorize(code, stateUUID, redirectUri);
      sessionStorage.removeItem('stateUUID');
      return authorization;
    } else {
      return new Promise((resolve, _reject) => {
        resolve({
          code: 'Invalid.Okta.Response',
          message: "state value returned from okta didn't match original state value"
        });
      });
    }
  }
};

export default okta;