import Component from '@ember/component'
import layout from './template'

/**
  A amount/money input component. Usage:

  ```hbs
    {{amount-input value=value update=(action (mut value))}}
  ```

  @class AmountInput
  @public
*/
export default Component.extend({
  layout,
  classNames: ['amount-input'],

  /**
    The currency displayed in the input
    @argument currency
    @type String?
  */
  currency: 'EUR',

  /**
    A custom class applied on the input
    @argument inputClass
    @type String?
  */
  inputClass: null,

  /**
    Defines the argument sent to toFixed()
    Can be n>=0
    @argument numberOfDecimal
    @type Number?
  */
  numberOfDecimal: 2,

  /**
    The placeholder
    @argument placeholder
    @type String?
  */
  placeholder: '0.00',

  /**
    The input's value.
    Should be updated using the `update()` argument
    @argument value
    @type Number
    @required
  */
  value: null,

  /**
    Specifies the number intervals for the input field
    Some browser also use it to validate the value if it used in a form
    Can be n>=0
    @argument step
    @type Number?
  */
  step: 0.01,

  /**
    Function triggered when onInput and onFocusOut with the new value
    Use it to update your value
    @argument update
    @type function
    @param Number value
    @required
  */
  update() {},

  input(e) {
    var { value } = e.target
    this.update(value)
    return true
  },

  focusOut() {
    if (this.value) {
      // add decimals
      var floatValue = parseFloat(this.value)
      this.update(floatValue.toFixed(this.numberOfDecimal))
    }
  }
})
