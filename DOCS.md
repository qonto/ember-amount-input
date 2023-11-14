# Documentation

## Installation

```
ember install ember-amount-input
```

or

```
yarn install -D ember-amount-input
```

or

```
npm install --save-dev ember-amount-input
```

or

```
pnpm install -D ember-amount-input
```

## API

| Argument        | Type     | Required | Description                                                                                         |
| --------------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| currency        | string   | false    | The currency displayed in the input.                                                                |
| disabled        | boolean  | false    | A boolean argument that can be used to disable the input.                                           |
| inputClass      | string   | false    | A custom class to apply on the input.                                                               |
| inputId         | string   | false    | A custom id to apply on the input.                                                                  |
| numberOfDecimal | number   | false    | The number of decimal to use for the value.                                                         |
| placeholder     | string   | false    | The placeholder used by the input.                                                                  |
| step            | number   | false    | The interval for the input field. Some browser also use it to validate the value if used in a form. |
| update          | function | true     | A function triggered with the new value. Use it to update your value.                               |
| value           | number   | true     | The input's value. It should be updated using the `update` argument.                                |

## TypeScript usage

The `AmountInput` component has proper [Glint](https://github.com/typed-ember/glint) types, which allow you to get strict type checking in your templates when using TypeScript.

Unless you are using [strict mode](http://emberjs.github.io/rfcs/0496-handlebars-strict-mode.html) templates (via [first class component templates](http://emberjs.github.io/rfcs/0779-first-class-component-templates.html)),
you need to import the addon's Glint template registry entries as described in the [Using Addons](https://typed-ember.gitbook.io/glint/using-glint/ember/using-addons#using-glint-enabled-addons) documentation:

```ts
// e.g. types/glint.d.ts
import "@glint/environment-ember-loose";
import type AmountInputRegistry from "ember-amount-input/template-registry";

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry
    extends AmountInputRegistry /* other addon registries */ {
    // local entries
  }
}
```

## Examples

### Basic

```hbs
<AmountInput @value={{this.value}} @update={{fn (mut this.value)}} />
```

### Disabled

```hbs
<AmountInput @value={{924.67}} @disabled={{true}} />
```

### Advanced

```hbs
<AmountInput
  @placeholder="1.000.000"
  @step={{1}}
  @currency="USD"
  @numberOfDecimal={{0}}
  @value={{this.value}}
  @update={{fn (mut this.value)}}
/>
```
