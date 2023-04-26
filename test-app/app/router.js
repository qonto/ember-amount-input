import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route('installation');

    this.route('components', function () {
      this.route('amount-input');
    });
  });
});

export default Router;
