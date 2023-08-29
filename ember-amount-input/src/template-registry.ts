import type AmountInput from './components/amount-input';

export default interface Registry {
  AmountInput: typeof AmountInput;
  'amount-input': typeof AmountInput;
}
