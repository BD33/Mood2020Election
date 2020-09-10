const DiscoveryV2 = require('ibm-watson/discovery/v2');
const { IamAuthenticator } = require('ibm-watson/auth');


const discovery = new DiscoveryV2({
  version: '2020-08-27',
  authenticator: new IamAuthenticator({
    apikey: process.env.REACT_APP_DISCOVERY_API_KEY,
  }),
  serviceUrl: process.env.REACT_APP_DISCOVERY_URL,
});

