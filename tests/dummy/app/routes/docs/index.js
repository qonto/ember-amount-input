import DocsRoute from 'ember-cli-addon-docs/routes/docs'
import { inject as service } from '@ember/service'

export default class DocsIndexRoute extends DocsRoute {
  @service router

  beforeModel() {
    this.router.replaceWith('docs.installation')
  }
}
