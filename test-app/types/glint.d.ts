import '@glint/environment-ember-loose';
import type AmountInputRegistry from 'ember-amount-input/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends AmountInputRegistry {}
}
