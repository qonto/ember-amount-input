import Component from '@glimmer/component'
import { action } from '@ember/object'

const KEY_CODE_E = 'e'
const KEY_CODE_FULLSTOP = '.'
const KEY_CODE_COMMA = ','

/**
  A amount/money input component. ssage:

  ```hbs
    <AmountInput @value={{this.value}} @update={{fn (mut this.value)}}/>
  ```

  @class AmountInput
  @public
*/
export default class AmountInput extends Component {
  argOrDefault(arg, defaultValue) {
    if (Object.keys(this.args).includes(arg)) {
      return this.args[arg]
    }
    return defaultValue
  }

  /**
    The currency displayed in the input
    @argument currency
    @type String?
  */
  get currency() {
    return this.argOrDefault('currency', 'EUR')
  }

  /**
    Disable the input
    @argument disabled
    @type Boolean?
  */

  /**
    A custom class applied on the input
    @argument inputClass
    @type String?
  */

  /**
    A custom id applied on the input
    @argument inputId
    @type String?
  */
  get inputId() {
    return this.argOrDefault('inputId', 'amount-input')
  }

  /**
    Defines the argument sent to toFixed()
    Can be n>=0
    @argument numberOfDecimal
    @type Number?
  */

  get numberOfDecimal() {
    return this.argOrDefault('numberOfDecimal', 2)
  }

  /**
    The placeholder
    @argument placeholder
    @type String?
  */
  get placeholder() {
    return this.argOrDefault('placeholder', '0.00')
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
    return this.argOrDefault('step', 0.01)
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
    const keyPressToVerify = event.key.toLowerCase()
    if (keyPressToVerify === KEY_CODE_E) {
      return false
    } else if (
      this.numberOfDecimal === 0 &&
      [KEY_CODE_FULLSTOP, KEY_CODE_COMMA].includes(keyPressToVerify)
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
