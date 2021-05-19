import React, { useEffect, useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import RolesContext from '../../store/roles-context';

const AssignRole = (props) => {
  const history = useHistory();
  const { getAccessTokenSilently, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  const rolesCtx = useContext(RolesContext);

  // rolesCtx.roleHandler();

  useEffect(() => {
    setIsLoading(true);
    const assignRole = async () => {
      const token = await getAccessTokenSilently({
        audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
      });

      try {
        const { data } = await axios({
          method: 'PATCH',
          headers: {
            authorization: `Bearer ${token}`,
          },
          url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.sub}`,
          data: {
            user_metadata: {
              isEmployer: true,
            },
          },
        });
        console.log(data);
        rolesCtx.roleHandler();
        history.replace('/');
      } catch (err) {
        console.log(err.response);
      }
    };

    assignRole();
  }, [user]);

  return <>{isLoading && <p>Loading...</p>}</>;
};

export default AssignRole;
