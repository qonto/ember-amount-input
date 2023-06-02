## v6.0.1 (2023-06-02)

#### :house: Internal

- [#453](https://github.com/qonto/ember-amount-input/pull/453) Add ember-amount-input working-directory details in release script ([@alexis-falaise](https://github.com/alexis-falaise))

- [#469](https://github.com/qonto/ember-amount-input/pull/469) Migrate from yarn to pnpm ([@vscav](https://github.com/vscav))

#### Committers: 2

- Alexis Falaise ([@alexis-falaise](https://github.com/alexis-falaise))
- Vincent Scavinner ([@vscav](https://github.com/vscav))

## v6.0.0 (2023-04-26)

#### :boom: Breaking Change

- [#431](https://github.com/qonto/ember-amount-input/pull/431) Remove support for Node v14 ([@alexis-falaise](https://github.com/alexis-falaise))

#### :rocket: Enhancement

- [#409](https://github.com/qonto/ember-amount-input/pull/409) Added readonly attribute ([@gianlucatomasino](https://github.com/gianlucatomasino))

- [#429](https://github.com/qonto/ember-amount-input/pull/429) Expose min and max attributes ([@rasha-essam](https://github.com/rasha-essam))

- [#431](https://github.com/qonto/ember-amount-input/pull/431) Convert to v2 addon ([@alexis-falaise](https://github.com/alexis-falaise))

#### :bug: Bug Fix

- [#410](https://github.com/qonto/ember-amount-input/pull/410) use already parsed e.target.valueAsNumber value instead of e.target.value ([@poulet42](https://github.com/poulet42))

- [#418](https://github.com/qonto/ember-amount-input/pull/418) fix issue where 0 would not trigger an update call on blur ([@poulet42](https://github.com/poulet42))

#### Committers: 3

- Corentin ([@poulet42](https://github.com/poulet42))
- Gianluca Tomasino ([@gianlucatomasino](https://github.com/gianlucatomasino))
- Rasha Essam ([@rasha-essam](https://github.com/rasha-essam))
- Alexis Falaise ([@alexis-falaise](https://github.com/alexis-falaise))

## v5.0.0 (2022-09-13)

#### :boom: Breaking Change

- [#379](https://github.com/qonto/ember-amount-input/pull/379) Update LTS support only support ember 3.24 or above ([@mrloop](https://github.com/mrloop))

#### :bug: Bug Fix

- [#383](https://github.com/qonto/ember-amount-input/pull/383) Add ember-cli-addon-docs dependency so does not error ([@mrloop](https://github.com/mrloop))

#### :memo: Documentation

- [#383](https://github.com/qonto/ember-amount-input/pull/383) Add ember-cli-addon-docs dependency so does not error ([@mrloop](https://github.com/mrloop))

#### Committers: 1

- Ewan McDougall ([@mrloop](https://github.com/mrloop))

## v4.1.0 (2022-08-19)

#### :rocket: Enhancement

- [#375](https://github.com/qonto/ember-amount-input/pull/375) Add named argument `@inputId` to allow setting the input id ([@mrloop](https://github.com/mrloop))

#### :memo: Documentation

- [#371](https://github.com/qonto/ember-amount-input/pull/371) Update release instructions and link to docs ([@mrloop](https://github.com/mrloop))

#### Committers: 1

- Ewan McDougall ([@mrloop](https://github.com/mrloop))

## v4.0.0 (2022-07-18)

#### :boom: Breaking Change

- [#365](https://github.com/qonto/ember-amount-input/pull/365) Drop node 12 support ([@mrloop](https://github.com/mrloop))

#### :bug: Bug Fix

- [#370](https://github.com/qonto/ember-amount-input/pull/370) Use pre octane default named argument handling. ([@mrloop](https://github.com/mrloop))

#### :memo: Documentation

- [#367](https://github.com/qonto/ember-amount-input/pull/367) Document the @disabled argument ([@mrloop](https://github.com/mrloop))
- [#368](https://github.com/qonto/ember-amount-input/pull/368) Use angle bracket syntax for amount-input ([@mrloop](https://github.com/mrloop))
- [#360](https://github.com/qonto/ember-amount-input/pull/360) Update docs to allow further dependency updates ([@mrloop](https://github.com/mrloop))
- [#308](https://github.com/qonto/ember-amount-input/pull/308) Update template.md ([@evidencefrank](https://github.com/evidencefrank))
- [#285](https://github.com/qonto/ember-amount-input/pull/285) Update homepage URL ([@mrloop](https://github.com/mrloop))

#### :house: Internal

- [#336](https://github.com/qonto/ember-amount-input/pull/336) CI: Automate release ([@zeppelin](https://github.com/zeppelin))

#### Committers: 3

- Ewan McDougall ([@mrloop](https://github.com/mrloop))
- Frank ([@evidencefrank](https://github.com/evidencefrank))
- Gabor Babicz ([@zeppelin](https://github.com/zeppelin))

## v3.0.0 (2021-05-20)

#### :boom: Breaking Change

- [#278](https://github.com/qonto/ember-amount-input/pull/278) Drop NodeJs 10 and 13 support ([@dcyriller](https://github.com/dcyriller))
- [#280](https://github.com/qonto/ember-amount-input/pull/280) Update ember-try config to drop compatibility with ember versions lower than 3.16 ([@dcyriller](https://github.com/dcyriller))

#### :rocket: Enhancement

- [#271](https://github.com/qonto/ember-amount-input/pull/271) Fix property fallback lookup deprecation ([@CYriuk](https://github.com/CYriuk))

#### :house: Internal

- [#274](https://github.com/qonto/ember-amount-input/pull/274) Switch to using Github actions ([@dcyriller](https://github.com/dcyriller))

#### Committers: 3

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- [@CYriuk](https://github.com/CYriuk)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v2.2.1 (2021-05-20)

New release of v2.1.0 (a 2.2.0 was wrongly released)

## v2.0.3 (2021-05-20)

New release of v2.0.0 (a 2.0.2 was wrongly released)

## v2.1.0 (2020-09-03)

#### :rocket: Enhancement

- [#200](https://github.com/qonto/ember-amount-input/pull/200) input mask ".", "," when numberOfDecimal=0 and always mask e key ([@izelnakri](https://github.com/izelnakri))
- [#197](https://github.com/qonto/ember-amount-input/pull/197) :wheelchair: add id attribute to input ([@mattfrankjames](https://github.com/mattfrankjames))

#### :memo: Documentation

- [#211](https://github.com/qonto/ember-amount-input/pull/211) Add RELEASE instructions ([@dcyriller](https://github.com/dcyriller))

#### Committers: 4

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Izel Nakri ([@izelnakri](https://github.com/izelnakri))
- Matt James ([@mattfrankjames](https://github.com/mattfrankjames))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v2.0.0 (2020-01-03)

#### :boom: Breaking Change

- [#126](https://github.com/qonto/ember-amount-input/pull/126) ð Drop node 8 support ([@dbendaou](https://github.com/dbendaou))
- [#61](https://github.com/qonto/ember-amount-input/pull/61) Drop Node.js v6 support ([@dcyriller](https://github.com/dcyriller))

#### :bug: Bug Fix

- [#20](https://github.com/qonto/ember-amount-input/pull/20) ðð Force placeholder opacity ([@mbinet](https://github.com/mbinet))

#### :memo: Documentation

- [#22](https://github.com/qonto/ember-amount-input/pull/22) Update README.md ([@dbendaou](https://github.com/dbendaou))

#### Committers: 4

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Djamel B. ([@dbendaou](https://github.com/dbendaou))
- Maxime ([@mbinet](https://github.com/mbinet))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v1.0.0-beta.1 (2019-02-25)

#### :bug: Bug Fix

- [#20](https://github.com/qonto/ember-amount-input/pull/20) 🐛💄 Force placeholder opacity ([@mbinet](https://github.com/mbinet))

#### Committers: 1

- Maxime ([@mbinet](https://github.com/mbinet))
