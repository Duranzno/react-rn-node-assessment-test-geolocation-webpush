// .storybook/preview.js

import React from 'react';
import '../src/styles/main.css';

export const decorators = [(Story) => <div className="px-10 py-10"><Story/></div>];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  
}
