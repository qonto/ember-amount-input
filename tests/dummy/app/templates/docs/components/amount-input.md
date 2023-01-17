<h1>AMOUNT-INPUT</h1>

<h2>Basic</h2>

<DocsDemo as |demo|>
  <demo.example @name="amount-input-base">
    <AmountInput
      @value={{this.value}}
      @update={{fn (mut this.value)}}
    />
  </demo.example>
  <demo.snippet @name="amount-input-base"/>
</DocsDemo>

<h2>Disabled</h2>

<DocsDemo as |demo|>
  <demo.example @name="amount-input-disabled">
    <AmountInput
      @value={{924.67}}
      @disabled={{true}}
    />
  </demo.example>
  <demo.snippet @name="amount-input-disabled"/>
</DocsDemo>

<h2>Readonly</h2>

<DocsDemo as |demo|>
  <demo.example @name="amount-input-readonly">
    <AmountInput
      @value={{924.67}}
      @readonly={{true}}
    />
  </demo.example>
  <demo.snippet @name="amount-input-readonly"/>
</DocsDemo>

<h2>Advanced</h2>

<DocsDemo as |demo|>
  <demo.example @name="amount-input-params">
    <AmountInput
      @placeholder="1.000.000"
      @step={{1}}
      @currency="USD"
      @numberOfDecimal={{0}}
      @value={{this.valueParams}}
      @update={{fn (mut this.valueParams)}}
    />
  </demo.example>
  <demo.snippet @name="amount-input-params"/>
</DocsDemo>
