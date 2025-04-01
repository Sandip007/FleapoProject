/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../app.json'; // Ensure correct path

AppRegistry.registerComponent(appName, () => App);
