import React from 'react';

const RolesContext = React.createContext({
  isEmployer: false,
  roleHandler: () => {},
});

export default RolesContext;
