import React from 'react';

export const Image = (props: { src: string }) => {
  return (
    <img
      src={props.src}
      width={'100%'}
      style={{
        backgroundSize: '100%',
      }}
    />
  );
};

export * from './logo/Logo';
export * from './logo/LogoWithText';
