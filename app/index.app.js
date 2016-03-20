// angular modules
import constants from './constants';
import onConfig  from './config/on_config';
import onRun     from './config/on_run';
import './templates';
//import './filters';
import './controllers';
import './services';
import './directives';

//import 'ngCordova';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  //'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
  //'ngCordova'
];

const appName = 'app';

// mount on window for testing
window.app = angular.module(appName, requires);

angular.module(appName).constant('AppSettings', constants);

angular.module(appName).config(onConfig);

angular.module(appName).run(onRun);

angular.bootstrap(document, [appName], {
  strictDi: true
});
