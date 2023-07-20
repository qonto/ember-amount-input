import Component from '@glimmer/component';
import { action } from '@ember/object';
import './amount-input.css';

const KEY_CODE_E = 69;
const KEY_CODE_FULLSTOP = 190;
const KEY_CODE_COMMA = 188;

export interface AmountInputArgs {
  disabled: boolean;
  readonly: boolean;
  update: (value: number) => void;
}

/**
  A amount/money input component. Usage:

  ```hbs
    <AmountInput @value={{this.value}} @update={{fn (mut this.value)}}/>
  ```

  @class AmountInput
  @public
*/
export default class AmountInput extends Component<AmountInputArgs> {
  argOrDefault(arg: any, defaultValue: any) {
    if (Object.keys(this.args).includes(arg)) {
      return this.args[arg as keyof typeof this.args];
    }
    return defaultValue;
  }

  /**
    The currency displayed in the input
    @argument currency
    @type String?
  */
  get currency(): string {
    return this.argOrDefault('currency', 'EUR');
  }

  /**
    Disable the input
    @argument disabled
    @type Boolean?
  */

  /**
    Set readonly the input
    @argument readonly
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
  get inputId(): string {
    return this.argOrDefault('inputId', 'amount-input');
  }

  /**
    Defines the argument sent to toFixed()
    Can be n>=0
    @argument numberOfDecimal
    @type Number?
  */

  get numberOfDecimal(): number {
    return this.argOrDefault('numberOfDecimal', 2);
  }

  /**
    The placeholder
    @argument placeholder
    @type String?
  */
  get placeholder(): string {
    return this.argOrDefault('placeholder', '0.00');
  }

  /**
    The min attribute specifies the minimum value for the amount <input> element.
    @argument min
    @type Number
  */

  /**
    The max attribute specifies the maximum value for the amount <input> element.
    @argument max
    @type Number
  */

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
  get step(): number {
    return this.argOrDefault('step', 0.01);
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
  onKeyDown(event: any) {
    if (event.keyCode === KEY_CODE_E) {
      event.preventDefault();
      return false;
    } else if (
      this.numberOfDecimal === 0 &&
      [KEY_CODE_FULLSTOP, KEY_CODE_COMMA].includes(event.keyCode)
    ) {
      event.preventDefault();
      return false;
    }
  }

  @action
  onInput(e: any) {
    var { value } = e.target;
    this.args.update?.(value);
    return true;
  }

  @action
  onFocusOut(e: any) {
    var { valueAsNumber, value } = e.target;
    if (value) {
      // add decimals
      this.args.update?.(valueAsNumber.toFixed(this.numberOfDecimal));
    }
  }
}
