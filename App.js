/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleProvider} from 'native-base';
import platform from './native-base-theme/variables/platform';
import getTheme from './native-base-theme/components';
import NativeBaseBug from './src/nativeBaseBug.component';

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <NativeBaseBug />
      </StyleProvider>
    );
  }
}

export default App;

