import React from 'react';
import backgroundLarge from '../../assets/images/kapustas.png';
import backgroundSmall from '../../assets/images/kapusta.png';

const BackgroundLogin = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundLarge})` }}
        className="background background__login-top"
      ></div>
      <div
        style={{ backgroundImage: `url(${backgroundSmall})` }}
        className="background background__login-bottom"
      ></div>
    </>
  );
};

export default BackgroundLogin;
