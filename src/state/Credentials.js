import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCredentials = () => {
  const loggedOut = { isAuthenticated: false, returnRoute: '/' };
  const initialCreds = () => {
    if (localStorage.getItem('creds')) {
      return JSON.parse(localStorage.getItem('creds'));
    } else {
      localStorage.setItem('creds', JSON.stringify(loggedOut));
      return loggedOut;
    }
  };
  const [creds, setCreds] = useState(initialCreds());
  const setCredsAndPersist = (newCreds) => {
    localStorage.setItem('creds', JSON.stringify(newCreds));
    setCreds(newCreds);
  };
  const signIn = (newCreds) => {
    setCredsAndPersist({
      isAuthenticated: true,
      returnRoute: creds.returnRoute,
      ...newCreds
    });
  };
  const signOut = (returnRoute) => {
    setCredsAndPersist(Object.assign({}, loggedOut, { returnRoute }));
  };
  const isAuthenticated = () => {
    return creds.isAuthenticated;
  };
  const get = () => {
    return creds;
  };
  const setReturnRoute = (returnRoute) => {
    const newCreds = JSON.parse(JSON.stringify(creds));
    newCreds.returnRoute = returnRoute;
    setCredsAndPersist(newCreds);
  };
  const returnRouteMatch = (returnRoute) => {
    if(creds.hasOwnProperty('returnRoute') && creds.returnRoute === returnRoute) {
      return true;
    } else {
      return false;
    }
  };

  return { isAuthenticated, signIn, signOut, get, setReturnRoute, returnRouteMatch };
};

const Credentials = createContainer(useCredentials);

export default Credentials;