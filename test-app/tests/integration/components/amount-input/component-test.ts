import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { blur, fillIn, render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TestContext as TestContextBase } from '@ember/test-helpers';
import { simulateUserPasteValue } from './helpers/paste-value';

interface TestContext extends TestContextBase {
  value: number | string;
  update: () => void;
}

const NOOP = (): void => {};

module('Integration | Component | amount-input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.update = NOOP;
  });

  test('is of type number', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <AmountInput
        @value={{0}}
        @update={{this.update}}
      />
    `);

    assert.dom('.amount-input').exists;
    assert.dom('input').hasAttribute('type', 'number');
  });

  test('allows passing arguments', async function (this: TestContext, assert) {
    this.value = 1;

    await render<TestContext>(hbs`
      <AmountInput
        @inputId='abcd'
        @currency='USD'
        @numberOfDecimal={{0}}
        @placeholder='1.000.000'
        @step={{1}}
        @value={{this.value}}
        @min={{5}}
        @max={{10}}
        @update={{fn (mut this.value)}} />
    `);

    assert.dom('.amount-input__currency').hasText('USD');
    assert.dom('input').hasValue('1');
    assert.dom('input').hasAttribute('id', 'abcd');

    await fillIn('input', '10.726');
    await blur('input');

    assert.dom('input').hasValue('11');

    assert.dom('input').hasAttribute('placeholder', '1.000.000');
    assert.dom('input').hasAttribute('min', '5');
    assert.dom('input').hasAttribute('max', '10');
  });

  test('uses named property declared (even if undefined) instead of defaults', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <AmountInput
        @currency={{undefined}}
        @numberOfDecimal={{undefined}}
        @placeholder={{undefined}}
        @step={{undefined}}
        @inputId={{undefined}}
        @value={{this.value}}
        @update={{fn (mut this.value)}}
      />
    `);

    assert.dom('.amount-input__currency').doesNotExist();
    assert.dom('input').hasNoAttribute('placeholder');
    assert.dom('input').hasNoAttribute('id');

    await fillIn('input', '10.726');
    await blur('input');

    assert.dom('input').hasValue('11');
  });

  test('uses defaults if named property are not declared', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <AmountInput
        @value={{this.value}}
        @update={{fn (mut this.value)}}
      />
    `);

    assert.dom('.amount-input__currency').hasText('EUR');
    assert.dom('input').hasAttribute('placeholder', '0.00');
    assert.dom('input').hasAttribute('id', 'amount-input');

    await fillIn('input', '10.726');
    await blur('input');

    assert.dom('input').hasValue('10.73');
  });

  test('does not type in when readonly attribute is set to true', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <AmountInput
        @value={{this.value}}
        @update={{fn (mut this.value)}}
        @readonly={{true}}
      />
    `);

    assert.rejects(fillIn('input', '10.726'));
  });

  test('calls update with the formatted value on blur if the value is 0', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <AmountInput
        @numberOfDecimal={{1}}
        @value={{this.value}}
        @update={{fn (mut this.value)}}
      />
    `);

    await fillIn('input', '0');
    await blur('input');
    assert.dom('input').hasValue('0.0');
  });

  test('masks `e`, `.` and `,` keys when `numberOfDecimal` argument is set to 0', async function (this: TestContext, assert) {
    this.value = 1;

    await render<TestContext>(hbs`
      <AmountInput
        @numberOfDecimal={{0}}
        @value={{this.value}}
        @update={{fn (mut this.value)}}
      />
    `);

    assert.dom('input').hasValue('1');

    await typeIn('input', 'e');
    await blur('input');

    assert.dom('input').hasValue('');

    await typeIn('input', 'e231');
    await blur('input');

    assert.dom('input').hasValue('231');

    await typeIn('input', '.');
    await blur('input');

    assert.dom('input').hasValue('');

    await typeIn('input', '.455');
    await blur('input');

    assert.dom('input').hasValue('455');

    await fillIn('input', '12.455');
    await blur('input');

    assert.dom('input').hasValue('12');

    await fillIn('input', '12.6');
    await blur('input');

    assert.dom('input').hasValue('13');

    await fillIn('input', 'e13.6');
    await blur('input');

    assert.dom('input').hasValue('');

    await typeIn('input', ',61');
    await blur('input');

    assert.dom('input').hasValue('61');

    await typeIn('input', '0,61');
    await blur('input');

    assert.dom('input').hasValue('61');
  });

  module('when user pastes a value with spaces', function () {
    module('and the value contains spaces', function () {
      test('calls update with the formatted value on blur without the spaces', async function (assert) {
        await render<TestContext>(hbs`
          <AmountInput
            @value={{this.value}}
            @update={{fn (mut this.value)}}
          />
        `);

        await simulateUserPasteValue('input', '1 061,00');

        assert.dom('input').hasValue('1061.00');

        await simulateUserPasteValue('input', '  1  061');

        assert.dom('input').hasValue('1061.00');
      });
    });

    module('and the value is not a valid amount', function () {
      test('calls update with an empty string value', async function (assert) {
        await render<TestContext>(hbs`
          <AmountInput
            @value={{this.value}}
            @update={{fn (mut this.value)}}
          />
        `);

        await simulateUserPasteValue('input', 'foo');

        assert.dom('input').hasValue('');
      });
    });
  });
});
