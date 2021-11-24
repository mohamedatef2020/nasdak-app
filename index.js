import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';
import {config} from './src/overmind/index';

import App from './App';

const overmind = createOvermind(config);


const AppEntry = () => {
  return (
    <Provider value={overmind}>
      <App />
    </Provider>
    
  )
}
registerRootComponent(AppEntry);