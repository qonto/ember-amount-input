

# [7.3.0](https://github.com/qonto/ember-amount-input/compare/v7.2.0...v7.3.0) (2024-07-23)


### Bug Fixes

* hbs render format in component tests ([2c99bcb](https://github.com/qonto/ember-amount-input/commit/2c99bcb58513dbb98db570f1feeeb330aa150837))
* prevent default pasting event ([2acb692](https://github.com/qonto/ember-amount-input/commit/2acb692a0e0bafb9f3c27035f9ac48b12ba17a46))


### Features

* use KeyboardEvent.key instead of KeyboardEvent.keyCode ([6ff26f6](https://github.com/qonto/ember-amount-input/commit/6ff26f62f26068b6f076f8c2a4038c93ea2eb4e3))

# [7.2.0](https://github.com/qonto/ember-amount-input/compare/v7.1.0...v7.2.0) (2024-03-08)


### Features

* handle pasted strings ([11ae13b](https://github.com/qonto/ember-amount-input/commit/11ae13b6a935d5b47719e85a0ed6ab8f99dc5a77))

# [7.1.0](https://github.com/qonto/ember-amount-input/compare/v7.0.0...v7.1.0) (2024-01-22)


### Bug Fixes

* bump lockfile post release and use semantic commit message ([9119d44](https://github.com/qonto/ember-amount-input/commit/9119d44901dbb83e693b961cce3d71c34da59bc9))
* **ci:** remove wrong GH token used in release-it config ([cbe1462](https://github.com/qonto/ember-amount-input/commit/cbe14622ba69f03fe435c96a11060ee057e85538))
* **ci:** set infile property in release-it config ([8f74536](https://github.com/qonto/ember-amount-input/commit/8f745366271a19241c533308c578800fcbd83a2f))
* replace v7-beta0 with v7 in changelog ([6d66e42](https://github.com/qonto/ember-amount-input/commit/6d66e42b5842556baf393a03056b92f52eef6f26))


### Features

* **ci:** add manual release workflow ([78b5d84](https://github.com/qonto/ember-amount-input/commit/78b5d8440745081002f30728a407d615d0fdcdaf))

## [7.0.0](https://github.com/qonto/ember-amount-input/compare/v6.0.2...v7.0.0) (2024-01-09)

#### :boom: Breaking Change
* [#656](https://github.com/qonto/ember-amount-input/pull/656) feat: drop node v16 ([@vscav](https://github.com/vscav))

#### :rocket: Enhancement
* [#589](https://github.com/qonto/ember-amount-input/pull/589) refactor: migrate test-app package to TypeScript ([@vscav](https://github.com/vscav))
* [#610](https://github.com/qonto/ember-amount-input/pull/610) refactor: migrate addon package to TypeScript ([@vscav](https://github.com/vscav))
* [#587](https://github.com/qonto/ember-amount-input/pull/587) fix(peer-deps): explicitly set ember-source versions range ([@vscav](https://github.com/vscav))

#### :memo: Documentation
* [#647](https://github.com/qonto/ember-amount-input/pull/647) docs: add TypeScript usage section ([@vscav](https://github.com/vscav))
* [#611](https://github.com/qonto/ember-amount-input/pull/611) chore: replace documentation application by markdown file ([@vscav](https://github.com/vscav))
* [#585](https://github.com/qonto/ember-amount-input/pull/585) chore: replace Travis-CI build status badge with GitHub CI workflow badge ([@vscav](https://github.com/vscav))

#### :house: Internal
* [#658](https://github.com/qonto/ember-amount-input/pull/658) feat: setup `release-it` ([@vscav](https://github.com/vscav))
* [#639](https://github.com/qonto/ember-amount-input/pull/639) chore(ember-cli-addon-docs): remove unused declarations from configuration files ([@vscav](https://github.com/vscav))
* [#631](https://github.com/qonto/ember-amount-input/pull/631) chore: install and use @qonto/eslint-config-typescript@1.0.0-rc.0 ([@dannycalleri](https://github.com/dannycalleri))
* [#614](https://github.com/qonto/ember-amount-input/pull/614) feat(ts-lint): allow use of private and protected syntax for classes in .ts files ([@vscav](https://github.com/vscav))
* [#588](https://github.com/qonto/ember-amount-input/pull/588) ci: add LTS ember-try scenarios for v4.8.0 and v4.12.0 ([@vscav](https://github.com/vscav))
* [#586](https://github.com/qonto/ember-amount-input/pull/586) refactor: rewrite test descriptions in component integration tests ([@vscav](https://github.com/vscav))
* [#543](https://github.com/qonto/ember-amount-input/pull/543) feat: add TypeScript configuration ([@vscav](https://github.com/vscav))
* [#547](https://github.com/qonto/ember-amount-input/pull/547) chore(ci): update action to setup pnpm in release script ([@vscav](https://github.com/vscav))
* [#546](https://github.com/qonto/ember-amount-input/pull/546) chore(ci): update action to setup pnpm in CI script ([@vscav](https://github.com/vscav))

#### Committers: 2
- Danny Calleri ([@dannycalleri](https://github.com/dannycalleri))
- Vincent Scavinner ([@vscav](https://github.com/vscav))


## v6.0.2 (2023-07-13)

#### :rocket: Enhancement

- [#512](https://github.com/qonto/ember-amount-input/pull/512) Prevent event propagation on invalid key presses ([@nicolasgasco](https://github.com/nicolasgasco))

#### :house: Internal

- [#513](https://github.com/qonto/ember-amount-input/pull/513) Auto update lock file with dependabot PRs ([@poulet42](https://github.com/poulet42))
- [#493](https://github.com/qonto/ember-amount-input/pull/493) Use packageManager to set pnpm version ([@poulet42](https://github.com/poulet42))
- [#492](https://github.com/qonto/ember-amount-input/pull/492) Remove double pnpm installation on CI ([@poulet42](https://github.com/poulet42))
- [#491](https://github.com/qonto/ember-amount-input/pull/491) Remove double node installation on CI ([@poulet42](https://github.com/poulet42))

#### Committers: 2

- Corentin ([@poulet42](https://github.com/poulet42))
- Nicolas Gasco ([@nicolasgasco](https://github.com/nicolasgasco))

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
