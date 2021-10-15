import React from 'react';

export default function GlobalLoader() {
  const DivStyle = {
    position: 'fixed',
    zIndex: '20000000',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 35, 73, .2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={DivStyle}>
      <div>
        <div></div>
      </div>
    </div>
  );
}
