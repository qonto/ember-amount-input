import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { blur, fillIn, render, typeIn } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | amount-input', function(hooks) {
  setupRenderingTest(hooks)

  test('Input should be of type number', async function(assert) {
    await render(hbs`
      <AmountInput/>
    `)

    assert.dom('.amount-input').exists
    assert.dom('input').hasAttribute('type', 'number')
  })

  test('Arguments work properly', async function(assert) {
    this.set('value', 1)

    await render(hbs`
      <AmountInput
        @inputId='abcd'
        @currency="USD"
        @numberOfDecimal={{0}}
        @placeholder="1.000.000"
        @step={{1}}
        @value={{this.value}}
        @update={{fn (mut this.value)}} />
    `)

    assert.dom('.amount-input__currency').hasText('USD')
    assert.dom('input').hasValue('1')
    assert.dom('input').hasAttribute('id', 'abcd')

    await fillIn('input', '10.726')
    await blur('input')

    assert.dom('input').hasValue('11')

    assert.dom('input').hasAttribute('placeholder', '1.000.000')
  })

  test('defaults are not used if named property declared even if undefined', async function(assert) {
    await render(hbs`
      <AmountInput
        @currency={{this.isUndefined}}
        @numberOfDecimal={{this.isUndefined}}
        @placeholder={{this.isUndefined}}
        @step={{this.isUndefined}}
        @inputId={{this.isUndefined}}
        @value={{this.value}}
        @update={{fn (mut this.value)}} />
    `)
    assert.dom('.amount-input__currency').hasText('')
    assert.dom('input').hasNoAttribute('placeholder')
    assert.dom('input').hasNoAttribute('id')

    // test numberOfDecimal
    await fillIn('input', '10.726')
    await blur('input')

    assert.dom('input').hasValue('11')
  })

  test('defaults are used if named property not declared', async function(assert) {
    await render(hbs`
      <AmountInput
        @value={{this.value}}
        @update={{fn (mut this.value)}} />
    `)

    assert.dom('.amount-input__currency').hasText('EUR')
    assert.dom('input').hasAttribute('placeholder', '0.00')
    assert.dom('input').hasAttribute('id', 'amount-input')

    // test numberOfDecimal
    await fillIn('input', '10.726')
    await blur('input')

    assert.dom('input').hasValue('10.73')
  })

  test('e, . and , key should be masked when numberOfDecimal={{0}}', async function(assert) {
    this.set('value', 1)

    await render(hbs`
      <AmountInput
        @numberOfDecimal={{0}}
        @value={{this.value}}
        @update={{fn (mut this.value)}}
      />
    `)

    assert.dom('input').hasValue('1')

    await typeIn('input', 'e')
    await blur('input')

    assert.dom('input').hasValue('')

    await typeIn('input', 'e231')
    await blur('input')

    assert.dom('input').hasValue('231')

    await typeIn('input', '.')
    await blur('input')

    assert.dom('input').hasValue('')

    await typeIn('input', '.455')
    await blur('input')

    assert.dom('input').hasValue('455')

    await fillIn('input', '12.455')
    await blur('input')

    assert.dom('input').hasValue('12')

    await fillIn('input', '12.6')
    await blur('input')

    assert.dom('input').hasValue('13')

    await fillIn('input', 'e13.6')
    await blur('input')

    assert.dom('input').hasValue('')

    await typeIn('input', ',61')
    await blur('input')

    assert.dom('input').hasValue('61')

    await typeIn('input', '0,61')
    await blur('input')

    assert.dom('input').hasValue('61')
  })
})
