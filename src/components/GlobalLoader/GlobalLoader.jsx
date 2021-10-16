import React from 'react';
import Loader from 'react-js-loader';

export default function GlobalLoader() {
  const DivStyle = {
    position: 'fixed',
    zIndex: '20000000',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#f5f6fb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={DivStyle}>
      <div>
        <div>
          <Loader
            type="spinner-circle"
            bgColor={'#ff751d'}
            color={'#ff751d'}
            size={120}
          />
        </div>
      </div>
    </div>
  );
}
