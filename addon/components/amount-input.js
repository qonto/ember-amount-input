import Component from '@glimmer/component'
import { action } from '@ember/object'

const KEY_CODE_E = 69
const KEY_CODE_FULLSTOP = 190
const KEY_CODE_COMMA = 188

/**
  A amount/money input component. Usage:

  ```hbs
    {{amount-input value=value update=(action (mut value))}}
  ```

  @class AmountInput
  @public
*/
export default class AmountInput extends Component {
  /**
    The currency displayed in the input
    @argument currency
    @type String?
  */
  get currency() {
    return this.args.currency ?? 'EUR'
  }

  /**
    A custom class applied on the input
    @argument inputClass
    @type String?
  */

  /**
    Defines the argument sent to toFixed()
    Can be n>=0
    @argument numberOfDecimal
    @type Number?
  */

  get numberOfDecimal() {
    return this.args.numberOfDecimal ?? 2
  }

  /**
    The placeholder
    @argument placeholder
    @type String?
  */
  get placeholder() {
    return this.args.placeholder ?? '0.00'
  }

  /**
    The input's value.
    Should be updated using the `update()` argument
    @argument value
    @type Number
    @required
  */

  /**
    Specifies the number intervals for the input field
    Some browser also use it to validate the value if it used in a form
    Can be n>=0
    @argument step
    @type Number?
  */
  get step() {
    return this.args.step ?? 0.01
  }

  /**
    Function triggered when onInput and onFocusOut with the new value
    Use it to update your value
    @argument update
    @type function
    @param Number value
    @required
  */

  @action
  onKeyDown(event) {
    if (event.keyCode === KEY_CODE_E) {
      return false
    } else if (
      this.numberOfDecimal === 0 &&
      [KEY_CODE_FULLSTOP, KEY_CODE_COMMA].includes(event.keyCode)
    ) {
      return false
    }
  }

  @action
  onInput(e) {
    var { value } = e.target
    this.args.update?.(value)
    return true
  }

  @action
  onFocusOut(e) {
    var { value } = e.target
    if (value) {
      // add decimals
      var floatValue = parseFloat(value)
      this.args.update?.(floatValue.toFixed(this.numberOfDecimal))
    }
  }
}