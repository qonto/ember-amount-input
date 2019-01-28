import Controller from '@ember/controller'

export default Controller.extend({
  isExpanded: false,
  value: null,

  actions: {
    handleUpdate(value) {
      this.set('value', value)
    }
  }
})
