const config = {
  okta: {
    callback: '/okta/callback',
    issuer: 'https://lifeway.okta.com/oauth2',
    scopes: ['openid', 'email', 'profile', 'groups'],
    redirectUri: window.location.origin + '/okta/callback',
    clientId: '0oad3nj5yzWb4kqtB1t7' //not sure if this will need changing
  }
};

const env = process.env.REACT_APP_ENVIRONMENT;

if (env === 'int') {
  config.okta.clientId = '0oad3nj5yzWb4kqtB1t7';
  config.ui = {
    oaTestLink: 'https://assistant.int.lifeway.com',
    oaLink: 'https://assistant.int.lifeway.com'
  };
} else if (env === 'uat') {
  config.okta.clientId = '0oad3nj5yzWb4kqtB1t7';
  config.ui = {
    oaTestLink: 'https://assistant.uat.lifeway.com',
    oaLink: 'https://assistant.uat.lifeway.com'
  };
} else if (env === 'prod') {
  config.okta.clientId = '0oad3nl99plVOhpug1t7';
  config.ui = {
    oaTestLink: 'https://assistant.uat.lifeway.com',
    oaLink: 'https://assistant.lifeway.com'
  };
} else {
  config.okta.clientId = '0oad3nj5yzWb4kqtB1t7';
  config.gateway = { host: 'http://localhost:3010', testHost: 'http://localhost:3010', uploadPath: '/upload', authorizationPath: '/authorize' };
  config.ui = {
    oaTestLink: 'https://assistant.int.lifeway.com',
    oaLink: 'https://assistant.int.lifeway.com'
  };
}
export default config;