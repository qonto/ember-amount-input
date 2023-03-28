'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-amount-input'],
    },
    'ember-cli-addon-docs': {
      documentingAddonAt: '../ember-amount-input',
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
