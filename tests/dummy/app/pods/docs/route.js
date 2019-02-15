import DocsRoute from 'ember-cli-addon-docs/routes/docs'

export default class DocsIndexRoute extends DocsRoute {
  beforeModel() {
    this.replaceWith('docs.installation')
  }
}
