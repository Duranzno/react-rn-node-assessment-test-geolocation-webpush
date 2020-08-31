import React from 'react';
import {
  BaseButton,
  BaseButtonProperties,
} from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';

export const Button: React.FC<BaseButtonProperties> = (args) => {
  const style = tailwind(
    'text-base px-4 py-2 bg-white rounded-lg text-black border-solid border-2 border-black',
  );
  return <BaseButton {...args} style={style} />;
};

export const CircularButton: React.FC<BaseButtonProperties> = (args) => {
  const style = tailwind(
    'text-base px-4 py-2 bg-white rounded-lg text-black border-solid border-2 border-black',
  );
  return <BaseButton {...args} style={style} />;
};
