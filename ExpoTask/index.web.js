import { AppRegistry } from 'react-native';
import App from './App'; // Assuming your file is named App.js or app.js
import { name as appName } from './app.json';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Register your app with React Native Web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

// Register the service worker for PWA capabilities
serviceWorkerRegistration.register();