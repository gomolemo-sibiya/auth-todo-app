import React, { useContext } from 'react';
import { AuthContext } from './components/Auth';

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : '';

  return (
    <h2
      style={{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'lighter'
      }}
    >{`Welcome ${currentUserEmail}`}</h2>
  );
};

export default Welcome;
