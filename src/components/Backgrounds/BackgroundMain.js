import React from 'react';
import backgroundLarge from '../../assets/images/kapustas.png';

const BackgroundMain = () => {
  return (
    <>
      <div className="background background__main-top"></div>
      <div
        style={{ backgroundImage: `url(${backgroundLarge})` }}
        className="background background__main-bottom"
      ></div>
    </>
  );
};

export default BackgroundMain;
