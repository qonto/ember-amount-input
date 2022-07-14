import { action } from '@ember/object'
import Controller from '@ember/controller'

export default class ApplicationController extends Controller {
  isExpanded = false
  value = null

  @action
  handleUpdate(value) {
    this.set('value', value)
  }
}
