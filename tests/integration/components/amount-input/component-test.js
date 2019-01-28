import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { blur, fillIn, render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | amount-input', function(hooks) {
  setupRenderingTest(hooks)

  test('Input should be of type number', async function(assert) {
    await render(hbs`
      {{amount-input}}
    `)

    assert.dom('.amount-input').exists
    assert.dom('input').hasAttribute('type', 'number')
  })

  test('Arguments work properly', async function(assert) {
    this.set('value', 1)

    await render(hbs`
      {{amount-input
        currency="USD"
        numberOfDecimal=0
        placeholder="1.000.000"
        step=1
        value=value
        update=(action (mut value)) }}
    `)

    assert.dom('.amount-input__currency').hasText('USD')
    assert.dom('input').hasValue('1')

    await fillIn('input', '10.726')
    await blur('input')
    assert.dom('input').hasValue('11')

    assert.dom('input').hasAttribute('placeholder', '1.000.000')
  })
})
