import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import './amount-input.css';

const KEY_E = 'e';
const KEY_FULLSTOP = '.';
const KEY_COMMA = ',';

export interface AmountInputArgs {
  /**
   * The currency displayed in the input
   */
  currency?: string;

  /**
   * Disables the input
   */
  disabled?: boolean;

  /**
   * A custom class applied on the input
   */
  inputClass?: string;

  /**
   * A custom id applied on the input
   */
  inputId?: string;

  /**
   * Specifies the minimum value for the input field
   */
  min?: number;

  /**
   * Specifies the maximum value for the input field
   */
  max?: number;

  /**
   * Specifies the number of decimals to use for the amount value
   */
  numberOfDecimal?: number;

  /**
   * The placeholder displayed in the input
   */
  placeholder?: string;

  /**
   * Specifies if the input field should be read-only
   */
  readonly?: boolean;

  /**
   * Specifies the number intervals for the input field
   */
  step?: number;

  /**
   * The callback function triggered when the input value is updated
   */
  update: (value: string) => void;

  /**
   * The value of the input. It should be updated using the `update` argument
   */
  value: number | string;
}

export interface AmountInputSignature {
  Element: HTMLDivElement;
  Args: AmountInputArgs;
}

/**
 * An amount/money input component.
 *
 * @public
 * @class AmountInput
 *
 * @example
 *
 * ```hbs
 *  <AmountInput @value={{this.value}} @update={{fn (mut this.value)}} />
 * ```
 */
export default class AmountInput extends Component<AmountInputSignature> {
  /**
   * The currency displayed in the input.
   * Defaults to `EUR`.
   */
  get currency(): string {
    return this.argOrDefault('currency', 'EUR');
  }

  /**
   * Returns true if the currency is an empty string, null, or undefined.
   */
  get isCurrencyEmpty(): boolean {
    return isEmpty(this.currency);
  }

  /**
   * A custom id applied on the input.
   * Defaults to `amount-input`.
   */
  get inputId(): string {
    return this.argOrDefault('inputId', 'amount-input');
  }

  /**
   * Specifies the number of decimals to use for the amount value.
   * Can be >= 0.
   * Defaults to 2.
   */
  get numberOfDecimal(): number {
    return this.argOrDefault('numberOfDecimal', 2);
  }

  /**
   * The placeholder displayed in the input.
   * Defaults to `0.00`.
   */
  get placeholder(): string {
    return this.argOrDefault('placeholder', '0.00');
  }

  /**
   * Specifies the number intervals for the input field.
   * Can be >= 0.
   * Defaults to 0.01.
   */
  get step(): number {
    return this.argOrDefault('step', 0.01);
  }

  @action
  onKeyDown(event: KeyboardEvent): boolean {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey === KEY_E) {
      event.preventDefault();
      return false;
    } else if (
      this.numberOfDecimal === 0 &&
      [KEY_FULLSTOP, KEY_COMMA].includes(pressedKey)
    ) {
      event.preventDefault();
      return false;
    }

    return true;
  }

  @action
  onInput(event: Event): boolean {
    if (!(event.target instanceof HTMLInputElement)) return false;

    const { value } = event.target;
    this.args.update(value);

    return true;
  }

  @action
  onPaste(event: ClipboardEvent): boolean {
    event.preventDefault();

    const pastedValue = event.clipboardData?.getData('text');
    const parsedValue = parseFloat(pastedValue?.replace(/\s/g, '') ?? '');

    if (!isNaN(parsedValue)) {
      this.args.update(parsedValue.toFixed(this.numberOfDecimal));
      return true;
    }

    return false;
  }

  @action
  onFocusOut(event: FocusEvent): boolean {
    if (event.target instanceof HTMLInputElement) {
      const { valueAsNumber, value } = event.target;
      if (value) {
        this.args.update(valueAsNumber.toFixed(this.numberOfDecimal));
        return true;
      }
    }

    return false;
  }

  private argOrDefault<K extends keyof AmountInputArgs, T, D extends T>(
    arg: K,
    defaultValue: D,
  ): T {
    if (Object.keys(this.args).includes(arg)) {
      return this.args[arg] as T;
    }

    return defaultValue;
  }
}
