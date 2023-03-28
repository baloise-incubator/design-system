# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [10.15.2](https://github.com/baloise/design-system/compare/v10.15.1...v10.15.2) (2022-09-01)

### Bug Fixes

* closes [#648](https://github.com/baloise/design-system/issues/648), fix error on deleting input with mask ([b4fd476](https://github.com/baloise/design-system/commit/b4fd476895244b8d2e7e62eabed56321493ec1d6))

### [10.15.1](https://github.com/baloise/design-system/compare/v10.15.0...v10.15.1) (2022-08-23)

### Bug Fixes

* **form:** add new form component with scroll to first invalid field ([812e967](https://github.com/baloise/design-system/commit/812e96784ac5e8fd7564e1b15f6ab4f7e32e537a))

## [10.15.0](https://github.com/baloise/design-system/compare/v10.14.0...v10.15.0) (2022-08-22)

### Features

* **form:** add new form component with scroll to first invalid field ([2e8b07a](https://github.com/baloise/design-system/commit/2e8b07acc507bffdefaa0c1e24f5eee3e6455b53))

## [10.14.0](https://github.com/baloise/design-system/compare/v10.13.5...v10.14.0) (2022-08-16)

### Features

* **tabs:** add is-hidden property to bal-tab-item ([c0e7200](https://github.com/baloise/design-system/commit/c0e720064bd12e8c3cc13a0d89141503e9ed73cd))

### Bug Fixes

* **components-react:** Typo in Homepage ([40211a8](https://github.com/baloise/design-system/commit/40211a83d2cf73256f9ab1f2235d9ca65c13c65a))

### 10.13.4 (2022-06-23)


### [10.13.5](https://github.com/baloise/design-system/compare/v10.13.4...v10.13.5) (2022-07-05)

### Bug Fixes

* claim number formatter can accept small x and transfer it uppercase ([4b4b3e7](https://github.com/baloise/design-system/commit/4b4b3e7d43427e41ae39cc185042e5c6680a0c0c))

### [10.13.4](https://github.com/baloise/design-system/compare/v10.13.3...v10.13.4) (2022-06-23)

### Bug Fixes

* **testing:** update deps ([e55e44d](https://github.com/baloise/design-system/commit/e55e44ddc17b503f1a99275dd6070130cfc4bc81))
* **testing:** update deps ([3c55606](https://github.com/baloise/design-system/commit/3c556061cc87f26cd971ee9669a1d46445ebc4dc))
* **testing:** update deps ([9da47f5](https://github.com/baloise/design-system/commit/9da47f588acd266e55d1662b092c48f2e274ba94))



### [10.13.3](https://github.com/baloise/design-system/compare/v10.13.2...v10.13.3) (2022-06-21)


### Bug Fixes

* **#632:** enable X to be entered as last character in claim number ([26606b5](https://github.com/baloise/design-system/commit/26606b5bd19ce72128bbe14df61db53bd81727b7)), closes [#632](https://github.com/baloise/design-system/issues/632)



### [10.13.2](https://github.com/baloise/design-system/compare/v10.13.1...v10.13.2) (2022-06-16)


### Bug Fixes

* **modal:** remove promise rejection when no overlay exists bc promise should only be rejected when an error appears during dismiss of an existing overlay ([15671a3](https://github.com/baloise/design-system/commit/15671a37ab9f99635cf4eedddfac617df78a0d8e))



### [10.13.1](https://github.com/baloise/design-system/compare/v10.13.0...v10.13.1) (2022-06-15)

### Bug Fixes

- **popover:** handlePopoverPrepare uses event now ([aaee8a8](https://github.com/baloise/design-system/commit/aaee8a8a8e59b7d923e560db65275ac462727621))
- **select:** stop click event bubbeling ([df25293](https://github.com/baloise/design-system/commit/df25293c6cd3cf878bda08b8471c0ae77a3ca86e))
- **testing:** do not assume that an element exist when it was used ([d1f516c](https://github.com/baloise/design-system/commit/d1f516cc28bd290b29a7eaeca1edfd27cc96cb92))

## [10.13.0](https://github.com/baloise/design-system/compare/v10.12.0...v10.13.0) (2022-06-07)

### Features

- **form-gird:** add form grid component ([99de015](https://github.com/baloise/design-system/commit/99de015619b13c3dc4af98a41e6599c8c51708d1))
- **input-stepper:** add increase and decrease event ([11a186c](https://github.com/baloise/design-system/commit/11a186c56c2b231a6530e58fff99f4ad58d3d578))

### Bug Fixes

- **vue:** add data-testid prop type ([b2c761a](https://github.com/baloise/design-system/commit/b2c761ad0a60ac75c0889c417e1bac32d216eb8d))

## [10.12.0](https://github.com/baloise/design-system/compare/v10.11.3...v10.12.0) (2022-05-25)

### Features

- add event types for the main events ([fe13251](https://github.com/baloise/design-system/commit/fe1325158592f310def478a319756edd3740d8ac))

### Bug Fixes

- **vue:** pass emitted events ([6287435](https://github.com/baloise/design-system/commit/6287435eb0aa5a4cedcfeec8203a53882514ad35))

### [10.11.3](https://github.com/baloise/design-system/compare/v10.11.2...v10.11.3) (2022-05-24)

### Bug Fixes

- **field:** add css class for messages ([42f8d98](https://github.com/baloise/design-system/commit/42f8d98404af820fb359c6719febe03b599817cb))

### [10.11.2](https://github.com/baloise/design-system/compare/v10.11.1...v10.11.2) (2022-05-24)

### Bug Fixes

- **bal-input:** contract has now 10 digits and for contacts with 9 digits use offer-number mask ([293837b](https://github.com/baloise/design-system/commit/293837bca2a3a352990d8d86a51dd470d559b707))
- **testing:** change visit command to visitBalApp ([348bd4f](https://github.com/baloise/design-system/commit/348bd4f1925c9af100e3dc98cc57a3bcbd3e0415))

### [10.11.1](https://github.com/baloise/design-system/compare/v10.11.0...v10.11.1) (2022-05-18)

### Bug Fixes

- **tag:** add relative position on bal-card element ([064623a](https://github.com/baloise/design-system/commit/064623abb918d1534c62f4c8abfb3d9110e912aa))

## [10.11.0](https://github.com/baloise/design-system/compare/v10.10.8...v10.11.0) (2022-05-10)

### Features

- **field:** add weight prop ([4649a6c](https://github.com/baloise/design-system/commit/4649a6cca223a5d0b083b5742e6d439a57cf088e))
- **modal:** add dismissAll function ([b4e935a](https://github.com/baloise/design-system/commit/b4e935aeab9cb283a68c2f32741b5468c5adf8d6))
- **select:** add remote solution and adds starts with filter ([1db5cd7](https://github.com/baloise/design-system/commit/1db5cd7200072ac9dd3ea9a18cb4176be1d81d9a))

### Bug Fixes

- **button:** set flex 1 for expanded buttons ([1068613](https://github.com/baloise/design-system/commit/10686134f65d592d00be1927aa05710ed16e40e9))
- **field:** only set field props when defined to child components ([117326b](https://github.com/baloise/design-system/commit/117326b5d7ba74a977b9d6601f36df5c2ba66484))
- **form:** wait for next tick when setting focus ([a4d742e](https://github.com/baloise/design-system/commit/a4d742ee3c1611ddc2c1e31a542ba21b510ea123))
- **select:** updateRawValue can handle objects ([33957af](https://github.com/baloise/design-system/commit/33957af3dd89ff3d1a067718fb3e7072a41cb26c))
- **testing:** adjust text and heading contains command ([d8035d3](https://github.com/baloise/design-system/commit/d8035d3c0da6ceb761c893839740b4c9bfb6bccd))
- **testing:** adjust text and heading contains command ([646204c](https://github.com/baloise/design-system/commit/646204c956087861750e08e28685f17a88a1b6be))
- **vue:** reduce payload ([8f36f8d](https://github.com/baloise/design-system/commit/8f36f8d10a7b1af438a7e2bc6e6ece84bedfcb05))
- **vue:** reduce payload ([7a216a2](https://github.com/baloise/design-system/commit/7a216a276c4a061e93c7042724f1ea9a30f15328))
- **vue:** register components ([854c353](https://github.com/baloise/design-system/commit/854c3530718609bbbbdb4bab3e2bc7d4371eca11))
- **vue:** try to reduce payload ([b994637](https://github.com/baloise/design-system/commit/b994637382f3eb164540a217a0a12688ab6bdcac))
- **vue:** use stencil output ([6815b8f](https://github.com/baloise/design-system/commit/6815b8f66645a84335ab34b5ac2f69c9d8a1c67e))
- **vue:** use stencil output ([ab16e1a](https://github.com/baloise/design-system/commit/ab16e1a256e5af8bcc55dd2e274c4afa5a6cc527))

### [10.10.8](https://github.com/baloise/design-system/compare/v10.10.7...v10.10.8) (2022-04-28)

### Bug Fixes

- **testing:** set waitForComponents to optional ([a1e33c7](https://github.com/baloise/design-system/commit/a1e33c79b69f87ff5327eac6218b6f5d28fc082e))

### [10.10.6](https://github.com/baloise/design-system/compare/v10.10.5...v10.10.6) (2022-04-25)

### Bug Fixes

- **slider:** css width calculation and add ticks ([973bb91](https://github.com/baloise/design-system/commit/973bb91d49d65499d107c8e195aa75aee4e78bb7))

### [10.10.5](https://github.com/baloise/design-system/compare/v10.10.2...v10.10.5) (2022-04-22)

### Bug Fixes

- **datepicker:** adjust nl translations ([95a93d9](https://github.com/baloise/design-system/commit/95a93d9620b7dbc56354631a3d6250fde0065333))
- **footer:** the footer links will only load for CH regions ([b86cc2f](https://github.com/baloise/design-system/commit/b86cc2f540cac2b717456844288bb6007080ac0d))
- **footer:** the footer links will only load for CH regions ([cdeca7b](https://github.com/baloise/design-system/commit/cdeca7bf745cf741b8bdd550068c876d563a746e))

### [10.10.2](https://github.com/baloise/design-system/compare/v10.10.1...v10.10.2) (2022-04-21)

### Bug Fixes

- **footer:** fetch links from all domains ([e2e120e](https://github.com/baloise/design-system/commit/e2e120ed6b0939794af85ee313cbfe1eb9e8c052))
- **footer:** version of web-app-utils for fetching the baloise data from the correct URLs ([241f37b](https://github.com/baloise/design-system/commit/241f37b919af594210e0bf293086b923481b3057))
- **integration:** update lock ([12fbb96](https://github.com/baloise/design-system/commit/12fbb964428e51ee0480df7c68589283e03bbfa5))
- **tag:** add group component to BalTagModule ([db1eb99](https://github.com/baloise/design-system/commit/db1eb99ee06fe560cd9a1a43b86714fa041f1245))

### 10.10.1 (2022-04-21)

### [10.10.7](https://github.com/baloise/design-system/compare/v10.10.6...v10.10.7) (2022-04-28)

### Bug Fixes

- initialize for ssr ([b68a1ee](https://github.com/baloise/design-system/commit/b68a1ee694fbd3a5f637be2317900d3b65a4cac9))
- **slider:** css width calculation and add ticks ([973bb91](https://github.com/baloise/design-system/commit/973bb91d49d65499d107c8e195aa75aee4e78bb7))

### [10.10.5](https://github.com/baloise/design-system/compare/v10.10.2...v10.10.5) (2022-04-22)

### Bug Fixes

- **datepicker:** adjust nl translations ([95a93d9](https://github.com/baloise/design-system/commit/95a93d9620b7dbc56354631a3d6250fde0065333))
- **footer:** the footer links will only load for CH regions ([b86cc2f](https://github.com/baloise/design-system/commit/b86cc2f540cac2b717456844288bb6007080ac0d))
- **footer:** the footer links will only load for CH regions ([cdeca7b](https://github.com/baloise/design-system/commit/cdeca7bf745cf741b8bdd550068c876d563a746e))

### [10.10.2](https://github.com/baloise/design-system/compare/v10.10.1...v10.10.2) (2022-04-21)

### Bug Fixes

- **footer:** fetch links from all domains ([e2e120e](https://github.com/baloise/design-system/commit/e2e120ed6b0939794af85ee313cbfe1eb9e8c052))
- **footer:** version of web-app-utils for fetching the baloise data from the correct URLs ([241f37b](https://github.com/baloise/design-system/commit/241f37b919af594210e0bf293086b923481b3057))
- **integration:** update lock ([12fbb96](https://github.com/baloise/design-system/commit/12fbb964428e51ee0480df7c68589283e03bbfa5))
- **tag:** add group component to BalTagModule ([db1eb99](https://github.com/baloise/design-system/commit/db1eb99ee06fe560cd9a1a43b86714fa041f1245))

### 10.10.1 (2022-04-21)

### [10.10.6](https://github.com/baloise/design-system/compare/v10.10.5...v10.10.6) (2022-04-25)

### Bug Fixes

- **datepicker:** adjust nl translations ([95a93d9](https://github.com/baloise/design-system/commit/95a93d9620b7dbc56354631a3d6250fde0065333))
- **footer:** the footer links will only load for CH regions ([b86cc2f](https://github.com/baloise/design-system/commit/b86cc2f540cac2b717456844288bb6007080ac0d))
- **footer:** the footer links will only load for CH regions ([cdeca7b](https://github.com/baloise/design-system/commit/cdeca7bf745cf741b8bdd550068c876d563a746e))
- **slider:** css width calculation and add ticks ([973bb91](https://github.com/baloise/design-system/commit/973bb91d49d65499d107c8e195aa75aee4e78bb7))

### [10.10.2](https://github.com/baloise/design-system/compare/v10.10.1...v10.10.2) (2022-04-21)

### Bug Fixes

- **footer:** fetch links from all domains ([e2e120e](https://github.com/baloise/design-system/commit/e2e120ed6b0939794af85ee313cbfe1eb9e8c052))
- **footer:** version of web-app-utils for fetching the baloise data from the correct URLs ([241f37b](https://github.com/baloise/design-system/commit/241f37b919af594210e0bf293086b923481b3057))
- **integration:** update lock ([12fbb96](https://github.com/baloise/design-system/commit/12fbb964428e51ee0480df7c68589283e03bbfa5))
- **tag:** add group component to BalTagModule ([db1eb99](https://github.com/baloise/design-system/commit/db1eb99ee06fe560cd9a1a43b86714fa041f1245))

### 10.10.1 (2022-04-21)

### [10.10.5](https://github.com/baloise/design-system/compare/v10.10.4...v10.10.5) (2022-04-22)

**Note:** Version bump only for package root

### [10.10.4](https://github.com/baloise/design-system/compare/v10.10.3...v10.10.4) (2022-04-22)

### Bug Fixes

- **footer:** the footer links will only load for CH regions ([b86cc2f](https://github.com/baloise/design-system/commit/b86cc2f540cac2b717456844288bb6007080ac0d))
- **footer:** the footer links will only load for CH regions ([cdeca7b](https://github.com/baloise/design-system/commit/cdeca7bf745cf741b8bdd550068c876d563a746e))

### [10.10.2](https://github.com/baloise/design-system/compare/v10.10.1...v10.10.2) (2022-04-21)

### Bug Fixes

- **footer:** fetch links from all domains ([e2e120e](https://github.com/baloise/design-system/commit/e2e120ed6b0939794af85ee313cbfe1eb9e8c052))
- **footer:** version of web-app-utils for fetching the baloise data from the correct URLs ([241f37b](https://github.com/baloise/design-system/commit/241f37b919af594210e0bf293086b923481b3057))
- **integration:** update lock ([12fbb96](https://github.com/baloise/design-system/commit/12fbb964428e51ee0480df7c68589283e03bbfa5))

### 10.10.1 (2022-04-21)

### [10.10.3](https://github.com/baloise/design-system/compare/v10.10.2...v10.10.3) (2022-04-22)

### Bug Fixes

- **footer:** fetch links from all domains ([e2e120e](https://github.com/baloise/design-system/commit/e2e120ed6b0939794af85ee313cbfe1eb9e8c052))
- **footer:** version of web-app-utils for fetching the baloise data from the correct URLs ([241f37b](https://github.com/baloise/design-system/commit/241f37b919af594210e0bf293086b923481b3057))
- **integration:** update lock ([12fbb96](https://github.com/baloise/design-system/commit/12fbb964428e51ee0480df7c68589283e03bbfa5))

### 10.10.1 (2022-04-21)

### [10.10.2](https://github.com/baloise/design-system/compare/v10.10.1...v10.10.2) (2022-04-21)

### Bug Fixes

- **tag:** add group component to BalTagModule ([db1eb99](https://github.com/baloise/design-system/commit/db1eb99ee06fe560cd9a1a43b86714fa041f1245))

### [10.10.1](https://github.com/baloise/design-system/compare/v10.10.0...v10.10.1) (2022-04-21)

### Bug Fixes

- simplify theme customization ([e90e095](https://github.com/baloise/design-system/commit/e90e09514cfc1164ceb04f1e968ca864da38c2bb))

## [10.10.0](https://github.com/baloise/design-system/compare/v10.9.1...v10.10.0) (2022-04-21)

### Features

- **bal-number-input:** add exactNumber property to define 0 as a default value ([57b3abb](https://github.com/baloise/design-system/commit/57b3abb6b873ee9a0ca9589edecebb7c37b08603))
- **breakpoint:** add isPlatform util ([a213e29](https://github.com/baloise/design-system/commit/a213e295ff0cc9a8c712239d65ef7910b839a296))
- **testing:** add new custom commands and improve logging ([34f1be4](https://github.com/baloise/design-system/commit/34f1be446c2abca0eb7330dd96d665a33ca64c47))
- **testing:** add new cypress commands ([86b05d9](https://github.com/baloise/design-system/commit/86b05d93a37016844c490ea18f7b0b2f0d950dcf))

### Bug Fixes

- **card:** add auto height ([07c8f2d](https://github.com/baloise/design-system/commit/07c8f2d244360b71d638f2926784addf537f841c))
- **card:** alignment for buttons and tags inside the card-title component ([09780bb](https://github.com/baloise/design-system/commit/09780bbb6e891265842906fb4693fe24f80b209f))
- **card:** alignment for buttons and tags inside the card-title component ([a04193f](https://github.com/baloise/design-system/commit/a04193f79f192e4ed84435ddb4123e7c2cd8034a))
- **data:** alignment horizontal ([cdfbf84](https://github.com/baloise/design-system/commit/cdfbf847a733d6925148039539c18453f8c7bb94))
- **i18n:** notify component always ([05217a8](https://github.com/baloise/design-system/commit/05217a8e6213bcb5c98f7ba7581fd384061bf3c5))

### [10.9.1](https://github.com/baloise/design-system/compare/v10.9.0...v10.9.1) (2022-04-13)

### Bug Fixes

- **checkbox-group:** add missing readonly prop ([bd63b9a](https://github.com/baloise/design-system/commit/bd63b9aeb296896119c2788807c90e51aa1b62c0))
- **config:** do not notify after initialize ([521cd21](https://github.com/baloise/design-system/commit/521cd211d50acd712331f850eecfab78f53a233a))
- if readonly do not react on user interactions ([aa844de](https://github.com/baloise/design-system/commit/aa844ded9c413cc806954b58ab3803209e70b9dc))
- **input-group:** add missing prop ([4a821dd](https://github.com/baloise/design-system/commit/4a821dd3041883f7f7e77d26c6b3bc38ebb95dcd))
- **input:** set placeholder color for readonly and disabled ([23606e1](https://github.com/baloise/design-system/commit/23606e1e6dc486da2c4d4781e660a6a8bcddb0b2))
- **radio:** adjust alignment ([8cc37fa](https://github.com/baloise/design-system/commit/8cc37fa55281d1a6f5118f888cae8b22992a380a))
- **table:** set text align default to left and add spacing for buttons ([015a81e](https://github.com/baloise/design-system/commit/015a81e4c86cd9588538de20c0457fa0225d4e22))
- use default cursor for disabled controls ([2668fb5](https://github.com/baloise/design-system/commit/2668fb51d74b8da8c6172e889e6462083ee5a528))
- **viewport:** set tablet breakpoint to 768px ([dd4e0b6](https://github.com/baloise/design-system/commit/dd4e0b618abd6a5d7a501124f03d567167c9ae98))

## [10.9.0](https://github.com/baloise/design-system/compare/v10.8.4...v10.9.0) (2022-04-12)

### Features

- **form:** add prop readonly ([03ff671](https://github.com/baloise/design-system/commit/03ff671b7ca90fa5da388a9554dd51ca8f6e5dcc))
- **icon:** add new icon logout, youtube and web ([ec7bdbf](https://github.com/baloise/design-system/commit/ec7bdbf7a75c5928306d7f79f5e694f26d4db502))
- **popover:** add prop expanded to use the fullwidth ([9b4dfa6](https://github.com/baloise/design-system/commit/9b4dfa607af52402e7758ac0ef38b30224a4e20c))

### [10.8.4](https://github.com/baloise/design-system/compare/v10.8.3...v10.8.4) (2022-04-11)

### Bug Fixes

- attach controllers to the window ([f946e22](https://github.com/baloise/design-system/commit/f946e22ae077ab6068bdce926e46cf56f7b5c3e1))
- change spacing variables to use rem instead of px ([7b4a1b7](https://github.com/baloise/design-system/commit/7b4a1b723f6b98392cca95885379bb44b156babb))
- **modal:** hide close button when modal is not closable ([2c57eb9](https://github.com/baloise/design-system/commit/2c57eb93abd4cd2c8956fa367c8fdf5353def19a))
- trigger globalscript in bal-app ([6d0070a](https://github.com/baloise/design-system/commit/6d0070ac26b957642ae39abc2061507a89733b81))

### [10.8.3](https://github.com/baloise/design-system/compare/v10.8.2...v10.8.3) (2022-04-07)

### Bug Fixes

- **datepicker:** enable locale typing ([2ed6004](https://github.com/baloise/design-system/commit/2ed60043cf32238595b8a7515f75a8176f30f49e))

### [10.8.2](https://github.com/baloise/design-system/compare/v10.8.1...v10.8.2) (2022-04-07)

### Bug Fixes

- **testing:** wait until ce is ready ([a8f7531](https://github.com/baloise/design-system/commit/a8f7531f51938a5ee02eac1706e615e82a63d330))

### [10.8.1](https://github.com/baloise/design-system/compare/v10.8.0...v10.8.1) (2022-04-06)

### Bug Fixes

- add es5 build to support no module scripts ([5daf384](https://github.com/baloise/design-system/commit/5daf38499626f55778c07d214d3dadfcb09b4303))

## [10.8.0](https://github.com/baloise/design-system/compare/v10.7.3...v10.8.0) (2022-04-04)

### Features

- **snackbar:** button can also be a link ([57ba176](https://github.com/baloise/design-system/commit/57ba1763332d54b6d2667ba52a6ffe062b759bef))
- **tabs:** can have a bottom border ([e4e6967](https://github.com/baloise/design-system/commit/e4e69675eba25b354d5d325978df56fd96ac11d4))
- **testing:** add command to find open modal ([7783760](https://github.com/baloise/design-system/commit/778376011042c3c192f0e7e30f551d1a31886d55))

### Bug Fixes

- **modal:** body and header can be used in nested elements ([dbda58b](https://github.com/baloise/design-system/commit/dbda58b47017250fc8b472d7e08e34fd5489861c))
- **modal:** reduce spacing header ([924236d](https://github.com/baloise/design-system/commit/924236d3d1a22fd678702c6d59f30b3bc1fc9bef))
- **select:** basic select opens and closes on input click ([21aa983](https://github.com/baloise/design-system/commit/21aa98386cc74fb93e0dab750f62d438a057521b))
- **testing:** fix input selector for number-inputs ([dc643d7](https://github.com/baloise/design-system/commit/dc643d79d853db66d420db1c8e3ff415db4610fc))

### [10.7.3](https://github.com/baloise/design-system/compare/v10.7.2...v10.7.3) (2022-03-30)

### Bug Fixes

- **datepicker:** adds missing days to february ([31a399a](https://github.com/baloise/design-system/commit/31a399a1f6b0e4b12fb770730e22a5231e4737dd))
- **datepicker:** adjust spacing to level 5 ([ca45062](https://github.com/baloise/design-system/commit/ca45062ec94d84cd9e9bfc22af1a5280263ff0a9))
- **file-upload:** label text breaks if to long ([4c66172](https://github.com/baloise/design-system/commit/4c66172b6a3d525a54b4f4add12939ec61de8c5b))
- **font:** move css files to a css folder ([8e20378](https://github.com/baloise/design-system/commit/8e203782ae556b17b179409f5ca700e17eb32676))
- **hint:** adjust spacing to level 5 ([5bc5f21](https://github.com/baloise/design-system/commit/5bc5f213cf42e5da741309edc00450198800b5bd))
- **hint:** close label is now optional ([04cd2b3](https://github.com/baloise/design-system/commit/04cd2b3dd962086f2ce2a3780d7e9606cc92312c))
- **modal:** adjust spacing to level 5 ([59b8630](https://github.com/baloise/design-system/commit/59b86303fb4cf88a089a2ebe8ce1989d38660b27))
- **notification:** adjust spacing to level 5 ([d61024c](https://github.com/baloise/design-system/commit/d61024c72480948956053878a1363a7c9cad4a46))
- **sheet:** adjust spacing to level 5 ([454ca7e](https://github.com/baloise/design-system/commit/454ca7e4704c32e283f36dfa58e0b2cc34e39032))
- **snackbar:** adjust spacing to level 5 ([bb63127](https://github.com/baloise/design-system/commit/bb63127b7fdb713824659dcad72ad4a200b4830b))

### [10.7.1](https://github.com/baloise/design-system/compare/v10.7.0...v10.7.1) (2022-03-29)

### Bug Fixes

- **modal:** set space as optional ([de62b2d](https://github.com/baloise/design-system/commit/de62b2dcce59e2966bd8e2b352c7f5b2f8e3e186))

## [10.7.0](https://github.com/baloise/design-system/compare/v10.6.3...v10.7.0) (2022-03-29)

### Features

- add contract-number mask in bal-input component ([e4ebdb6](https://github.com/baloise/design-system/commit/e4ebdb68d2dd6d08c37a0f706cc41dc60aee7a3c))
- add format offer option for bal-input ([bec0c3e](https://github.com/baloise/design-system/commit/bec0c3e46fce102299fbef957e6259a782d923a7))
- **modal:** add space property ([103348d](https://github.com/baloise/design-system/commit/103348d01ab1d2f49de73f3d9d042842e2c4f85c))

### Bug Fixes

- **card:** subtitle can have diffrent color and be bold ([be858a8](https://github.com/baloise/design-system/commit/be858a85da35315aba0f4301dd5253bcd5474667))
- **testing:** add missing hint commands ([547f420](https://github.com/baloise/design-system/commit/547f420b3f8d5b5468f9f9eae00349cafcda835b))

### [10.6.3](https://github.com/baloise/design-system/compare/v10.6.1...v10.6.3) (2022-03-24)

### 10.6.1 (2022-03-24)

### [10.7.2](https://github.com/baloise/design-system/compare/v10.7.1...v10.7.2) (2022-03-29)

### Bug Fixes

- **datepicker:** adds missing days to february ([31a399a](https://github.com/baloise/design-system/commit/31a399a1f6b0e4b12fb770730e22a5231e4737dd))
- **hint:** close label is now optional ([04cd2b3](https://github.com/baloise/design-system/commit/04cd2b3dd962086f2ce2a3780d7e9606cc92312c))
- **modal:** set space as optional ([de62b2d](https://github.com/baloise/design-system/commit/de62b2dcce59e2966bd8e2b352c7f5b2f8e3e186))

## [10.7.0](https://github.com/baloise/design-system/compare/v10.6.3...v10.7.0) (2022-03-29)

### Features

- **modal:** add space property ([103348d](https://github.com/baloise/design-system/commit/103348d01ab1d2f49de73f3d9d042842e2c4f85c))

### Bug Fixes

- **card:** subtitle can have diffrent color and be bold ([be858a8](https://github.com/baloise/design-system/commit/be858a85da35315aba0f4301dd5253bcd5474667))
- **testing:** add missing hint commands ([547f420](https://github.com/baloise/design-system/commit/547f420b3f8d5b5468f9f9eae00349cafcda835b))

### [10.7.1](https://github.com/baloise/design-system/compare/v10.7.0...v10.7.1) (2022-03-29)

### Features

- **modal:** add space property ([103348d](https://github.com/baloise/design-system/commit/103348d01ab1d2f49de73f3d9d042842e2c4f85c))

### Bug Fixes

- **card:** subtitle can have diffrent color and be bold ([be858a8](https://github.com/baloise/design-system/commit/be858a85da35315aba0f4301dd5253bcd5474667))
- **modal:** set space as optional ([de62b2d](https://github.com/baloise/design-system/commit/de62b2dcce59e2966bd8e2b352c7f5b2f8e3e186))
- **testing:** add missing hint commands ([547f420](https://github.com/baloise/design-system/commit/547f420b3f8d5b5468f9f9eae00349cafcda835b))

## [10.7.0](https://github.com/baloise/design-system/compare/v10.6.3...v10.7.0) (2022-03-29)

### Features

- **modal:** add space property ([103348d](https://github.com/baloise/design-system/commit/103348d01ab1d2f49de73f3d9d042842e2c4f85c))

### Bug Fixes

- **card:** subtitle can have diffrent color and be bold ([be858a8](https://github.com/baloise/design-system/commit/be858a85da35315aba0f4301dd5253bcd5474667))
- **testing:** add missing hint commands ([547f420](https://github.com/baloise/design-system/commit/547f420b3f8d5b5468f9f9eae00349cafcda835b))

### [10.6.3](https://github.com/baloise/design-system/compare/v10.6.2...v10.6.3) (2022-03-24)

### Bug Fixes

- **modal:** adjust tesing commands ([00b0f7e](https://github.com/baloise/design-system/commit/00b0f7eaa50e7064d50567a7effe8926fef5b5c3))
- **modal:** remove focus of element to eliminate window scrolling ([f2264df](https://github.com/baloise/design-system/commit/f2264df4362db484b7fefbdd8de445b281626b7f))
- **select-button:** add vertical style ([26199e8](https://github.com/baloise/design-system/commit/26199e818656f8addca35757a2d9465a3e94be64))
- **select-button:** adjust for long labels ([c4496c8](https://github.com/baloise/design-system/commit/c4496c8c38a7c51e0239b78392366945c59b2c2b))

### [10.6.2](https://github.com/baloise/design-system/compare/v10.6.1...v10.6.2) (2022-03-24)

### Bug Fixes

- **modal:** remove focus of element to eliminate window scrolling ([f2264df](https://github.com/baloise/design-system/commit/f2264df4362db484b7fefbdd8de445b281626b7f))
- **select-button:** add vertical style ([26199e8](https://github.com/baloise/design-system/commit/26199e818656f8addca35757a2d9465a3e94be64))
- **select-button:** adjust for long labels ([c4496c8](https://github.com/baloise/design-system/commit/c4496c8c38a7c51e0239b78392366945c59b2c2b))

## 10.6.0 (2022-03-23)

### [10.6.1](https://github.com/baloise/design-system/compare/v10.6.0...v10.6.1) (2022-03-24)

### Bug Fixes

- **modal:** remove focus of element to eliminate window scrolling ([f2264df](https://github.com/baloise/design-system/commit/f2264df4362db484b7fefbdd8de445b281626b7f))

## [10.6.0](https://github.com/baloise/design-system/compare/v10.5.2...v10.6.0) (2022-03-23)

### Features

- **file-upload:** add loading state ([37e60dd](https://github.com/baloise/design-system/commit/37e60ddabdbf7f6262835f6d96cb8fc3fad98bd2))
- **select:** list of options in a typeahead can be uses as a proposal ([ac6f2f2](https://github.com/baloise/design-system/commit/ac6f2f2d8165b10ea5ad1f3deffea6b576da5483))
- update dependencies ([9d76470](https://github.com/baloise/design-system/commit/9d764700d2174aff19a3e74b5694cc2364f5309a))

### Bug Fixes

- **checkbox:** remove opacity from hidden option ([ac49eae](https://github.com/baloise/design-system/commit/ac49eae3d32fbb93e6d60089bc93c6affc631dc8))
- **heading:** set to display block ([9b831df](https://github.com/baloise/design-system/commit/9b831df9774335e7faf430e414e2219eba9ae41c))
- **input-group:** set to width 100% ([44c37ff](https://github.com/baloise/design-system/commit/44c37ff3f0ec95af28ed16a1b8f0408ea83391a2))
- **navbar:** remove ie11 support ([900d76d](https://github.com/baloise/design-system/commit/900d76df88c3a2f94d9a3a220b28e3e3c7b99dc6))

### [10.5.1](https://github.com/baloise/design-system/compare/v10.3.0...v10.5.1) (2022-03-10)

### Features

- export prop types ([6eb0939](https://github.com/baloise/design-system/commit/6eb093919f230434dec69c11b8b26380e46d8930))
- **icon:** inline prop to set display inline-flex ([16f7865](https://github.com/baloise/design-system/commit/16f78657fd5ab10959e207cb45ca628aa77f03bd))
- **stage:** add prop rounded to change the border-radius ([fb8a8e6](https://github.com/baloise/design-system/commit/fb8a8e63cb716c9832dc75997081a11ee5659d0f))

### Bug Fixes

- **heading:** center text with icons ([d1ae35a](https://github.com/baloise/design-system/commit/d1ae35aba5d36724b6537e309313c57aaa46ed95))

### [10.5.2](https://github.com/baloise/design-system/compare/v10.5.1...v10.5.2) (2022-03-18)

### Bug Fixes

- try to fix file upload by adding passive:false to drag and drop events ([62c8390](https://github.com/baloise/design-system/commit/62c839037e184f330f6a02eeb2ad937e79fc7819))

### [10.5.1](https://github.com/baloise/design-system/compare/v10.5.0...v10.5.1) (2022-03-10)

### Bug Fixes

- **angular:** add new output ([7c196bf](https://github.com/baloise/design-system/commit/7c196bf14f780e3ce2ab77e2c8fec2d21e5f9c2f))
- **button:** enable custom content for square buttons ([ea1b7d6](https://github.com/baloise/design-system/commit/ea1b7d673a58a8f6b33e8571a058f8ae60f773f2))

## [10.5.0](https://github.com/baloise/design-system/compare/v10.4.4...v10.5.0) (2022-03-09)

### Features

- **card:** cards can have a hover effect and a selected background ([8cc7182](https://github.com/baloise/design-system/commit/8cc71827324566f82c78c1053345b2d95c87e88e))
- **data:** add multiline prop ([cc93a3a](https://github.com/baloise/design-system/commit/cc93a3a37ea725c66ad9d00b14bcc7f76f182bb8))
- **file-upload:** add events balFilesAdded and balFilesRemoved ([8c869d7](https://github.com/baloise/design-system/commit/8c869d77be3dbde2bbe1e23a28e5845d888ad87d))
- **select:** can be combined with icons and other inputs ([d35aff4](https://github.com/baloise/design-system/commit/d35aff4f989202060a2654b7149539238acef89a))

### Bug Fixes

- **button:** adjust style for danger outlined button ([c901e47](https://github.com/baloise/design-system/commit/c901e479e8590c7c36a013f6fc914d32588b8c94))
- **button:** hide slot content when square prop is set ([90ced0a](https://github.com/baloise/design-system/commit/90ced0ad8bba8a973f70c82deda808db6d91bd2c))
- **card:** remove usless margin bottom ([d31f5a8](https://github.com/baloise/design-system/commit/d31f5a83f5b117f76c85772fed0da9ad34075726))
- **checkbox:** enabling numbers ([768a58c](https://github.com/baloise/design-system/commit/768a58c98164ff8ec81b9bfedcecd6036217705d))
- **data:** enables custom elements between bal-data and bal-data-item ([a4608d0](https://github.com/baloise/design-system/commit/a4608d0bafc654c9d6018f85a2bb9d4a5b7dae04))
- **field:** only add margin to addon button ([d840066](https://github.com/baloise/design-system/commit/d8400668d28a65581a492628b4a9dd909f45a8e7))
- **radio:** enable boolean ([c834292](https://github.com/baloise/design-system/commit/c834292e524fe160d793453c034860d443ef13b5))

### [10.4.4](https://github.com/baloise/design-system/compare/v10.4.3...v10.4.4) (2022-03-08)

### Bug Fixes

- **card:** remove usless margin bottom ([d31f5a8](https://github.com/baloise/design-system/commit/d31f5a83f5b117f76c85772fed0da9ad34075726))
- **checkbox:** enabling numbers ([768a58c](https://github.com/baloise/design-system/commit/768a58c98164ff8ec81b9bfedcecd6036217705d))
- **data:** enables custom elements between bal-data and bal-data-item ([a4608d0](https://github.com/baloise/design-system/commit/a4608d0bafc654c9d6018f85a2bb9d4a5b7dae04))
- **radio:** enable boolean ([c834292](https://github.com/baloise/design-system/commit/c834292e524fe160d793453c034860d443ef13b5))

### [10.4.3](https://github.com/baloise/design-system/compare/v10.4.2...v10.4.3) (2022-03-08)

### Bug Fixes

- **checkbox:** enabling numbers ([768a58c](https://github.com/baloise/design-system/commit/768a58c98164ff8ec81b9bfedcecd6036217705d))
- **data:** enables custom elements between bal-data and bal-data-item ([a4608d0](https://github.com/baloise/design-system/commit/a4608d0bafc654c9d6018f85a2bb9d4a5b7dae04))

### [10.4.2](https://github.com/baloise/design-system/compare/v10.4.1...v10.4.2) (2022-03-08)

### Bug Fixes

- **card:** remove inner p to simplify usage ([0a27202](https://github.com/baloise/design-system/commit/0a27202e3620fddc245a31eaab4a5fef595d0b08))
- **card:** reset spacing of the batton-group ([4775a85](https://github.com/baloise/design-system/commit/4775a85f6111d6fd003d6998a8cc8bab8cedf874))
- **datepicker:** set week start to monday instead of sunday ([66ceaf0](https://github.com/baloise/design-system/commit/66ceaf00003a41f21cab49c32d9defa02d3897b0))
- **file-upload:** adjust styles for field usage ([a3d95df](https://github.com/baloise/design-system/commit/a3d95dfa402be98245a377b536124f5cbf9a3d8c))
- **modal:** disable scroll on body ([b09bd81](https://github.com/baloise/design-system/commit/b09bd81bce780b38297f16011adb73d77d787680))

### [10.4.1](https://github.com/baloise/design-system/compare/v10.4.0...v10.4.1) (2022-03-07)

### Features

- **checkbox:** group can act as a form control ([55b718f](https://github.com/baloise/design-system/commit/55b718fe7c493744976a28f3a61e3aa8aec638b4))

### Bug Fixes

- **angular:** add shared module to each component ([f6d7fa2](https://github.com/baloise/design-system/commit/f6d7fa2991473bf6a0bf1bf10cd433244ac11354))
- **angular:** add shared module to each component ([3eca007](https://github.com/baloise/design-system/commit/3eca007fe0be1b4be040c2f1c49810d62622911b))
- **button:** remove unused css for button in order to fix bal-badge ([3b61c18](https://github.com/baloise/design-system/commit/3b61c187e3c00a8efd0c742a69e30d8de5931f1d))

### [10.3.3](https://github.com/baloise/design-system/compare/v10.3.2...v10.3.3) (2022-03-07)

### Bug Fixes

- **angular:** filter errorType key of the ng-error component ([54c0869](https://github.com/baloise/design-system/commit/54c0869c6886795bb9d9adb2a0be248300dc1b5b))
- **hint:** make subject on field hint optional ([6fe3eae](https://github.com/baloise/design-system/commit/6fe3eaeb3b4b729da9477de42332d302b1118705))

### [10.3.2](https://github.com/baloise/design-system/compare/v10.3.1...v10.3.2) (2022-03-07)

### Bug Fixes

- **angular:** create shared module to have access to the value accessors ([4c37480](https://github.com/baloise/design-system/commit/4c374802455ca68bf850944cfc4c71d5ffa27a0e))

### [10.3.1](https://github.com/baloise/design-system/compare/v10.3.0...v10.3.1) (2022-03-07)

### Bug Fixes

- **angular:** update angular output lib ([2fd80a8](https://github.com/baloise/design-system/commit/2fd80a8f53acf48d8855c13410a69a8890a14d8a))
- **angular:** update angular output lib ([222d792](https://github.com/baloise/design-system/commit/222d79278b302eb4eaaf476f34e8d5a94b8ddc2b))

## [10.3.0](https://github.com/baloise/design-system/compare/v10.2.0...v10.3.0) (2022-03-03)

### Features

- **checkbox:** add new prop hidden ([2b3eb8d](https://github.com/baloise/design-system/commit/2b3eb8d8ec7d7cf8de5897de7ebfa6e33245a588))
- **icons:** add new settings icon ([f48ee52](https://github.com/baloise/design-system/commit/f48ee529f388a524ae6fc2008bead367f35e6439))
- **input:** only trigger change on user change events ([59913d3](https://github.com/baloise/design-system/commit/59913d365ad1e135a59662a775ddc7d70cdf1199))
- **inputs:** adjust input events ([6d9e1c7](https://github.com/baloise/design-system/commit/6d9e1c79427b11935d2fffa1516797be176c753e))
- **number-input:** create new component to improve type safty ([cf6a4db](https://github.com/baloise/design-system/commit/cf6a4db744496e22326652897d3402dac8ef3bed))
- **react:** add custom output ([53d6547](https://github.com/baloise/design-system/commit/53d6547763b262494b3b7051edc23b1f56b5f22e))
- **testing:** add legacy accessors ([82f3023](https://github.com/baloise/design-system/commit/82f3023b99320bea0f94e711e954ef06798f4341))
- **testing:** add legacy mixins ([d1c1fc6](https://github.com/baloise/design-system/commit/d1c1fc65a854db8cee02eed0f8428969e63cf1c0))
- update allowed hosts for footer links ([05fea7a](https://github.com/baloise/design-system/commit/05fea7a260390d1dbc802ca7b4aa956b69c97d00))

### Bug Fixes

- **angular:** add missing child components to the modules ([7e30eec](https://github.com/baloise/design-system/commit/7e30eecf612be3a6a5b6488a3c0d7527ce69959c))
- **angular:** add missing child components to the modules ([942fb79](https://github.com/baloise/design-system/commit/942fb79c8ff2fb991d815f91ffee0bb95ea6756f))
- **angular:** add missing child components to the modules ([a7ab7b1](https://github.com/baloise/design-system/commit/a7ab7b1ccecc90e169f4c1a7903dbe4374390c27))
- **angular:** add missing child components to the modules ([f1beac1](https://github.com/baloise/design-system/commit/f1beac1820bd30cb0a9ce13331a6f5d3178e8212))
- **angular:** add missing child components to the modules ([339a766](https://github.com/baloise/design-system/commit/339a76635a9e4f43808a88d6c48ad95118977a20))
- **close:** add button type ([b9fbfe8](https://github.com/baloise/design-system/commit/b9fbfe87bee21547df1efac90161a99b3a33cea3))
- **input-stepper:** switch buttons ([866b718](https://github.com/baloise/design-system/commit/866b718d55c727f2ad1147eccf4bf25899735e4e))
- **list:** change role to list ([d3a6e14](https://github.com/baloise/design-system/commit/d3a6e14a00953724c6cd0092709f5aa26d11cecc))
- **react:** use fragment for inner child elements ([86d4986](https://github.com/baloise/design-system/commit/86d49867c5f14c2fbad0db0020d2c754589a76c8))
- **select:** enable form submitting ([0d56e7f](https://github.com/baloise/design-system/commit/0d56e7fa20e99f59d845d440184b7041b92bb2f8))
- **stage:** center image ([2f36bdb](https://github.com/baloise/design-system/commit/2f36bdbccd1e6978dace9f465f248ea910d4beec))
- **stage:** create angular component set ([0f14d51](https://github.com/baloise/design-system/commit/0f14d51c03d03d2672968291d181694bc64b3ddd))
- **steps:** override clickable when disabled ([642406a](https://github.com/baloise/design-system/commit/642406adb80f990353e636b0ad8fa45e0a68b332))

## [10.2.0](https://github.com/baloise/design-system/compare/v10.1.0...v10.2.0) (2022-02-21)

### Features

- **field:** add hint props to bal-flield-hint ([a4ee057](https://github.com/baloise/design-system/commit/a4ee057abd1261e136997add251ebfeb58b600e8))
- **footer:** display language selection ([7cf914f](https://github.com/baloise/design-system/commit/7cf914f69a88b0f0bb4960c90efd1bcb059f11c9))
- **footer:** make language selection hideable ([7bd9926](https://github.com/baloise/design-system/commit/7bd9926dbb35ba50722d24a6b75bfbfbd6048d5c))
- **footer:** start to include language links ([4706e85](https://github.com/baloise/design-system/commit/4706e85a2b38e7faca90d6bd5dd9b319c127a729))
- **i18n:** onBalConfigChange ([87af016](https://github.com/baloise/design-system/commit/87af0165b49352befbc26b68cd29239ac4f5c514))
- **input-stepper:** add new component ([5b053c2](https://github.com/baloise/design-system/commit/5b053c299b5ba177d75d7b82221e295ea33d89c1))
- **list:** add native ul & ol styles ([3f3f375](https://github.com/baloise/design-system/commit/3f3f375f11baa0cb431504657baa2df041f851a4))
- **logo:** add new component ([525aef6](https://github.com/baloise/design-system/commit/525aef6fd260fa7200b258b253ac64b277821225)), closes [#484](https://github.com/baloise/design-system/issues/484)
- **navbar:** support tabs and popover ([924db93](https://github.com/baloise/design-system/commit/924db93b6af64a83c31e823d7e771d9901408f6b))
- **stage:** add new component ([7f07b50](https://github.com/baloise/design-system/commit/7f07b501bf1262d65daf53284b941a3fc7973282))
- **tag:** add light variant and combination with the card component ([c0811df](https://github.com/baloise/design-system/commit/c0811dfe831c276af7578b47e2c203add73822cd))

### Bug Fixes

- **button:** adjust spacing for mobile ([ec73ebd](https://github.com/baloise/design-system/commit/ec73ebd97910470788dae08497ebc5c32dd71bad))
- **button:** adjust styles for info ([3a95df1](https://github.com/baloise/design-system/commit/3a95df1eeda6bf0856e050e8eb57d32bd8e92aa7))
- **button:** remove 100% width use flexbox instead ([653a2b6](https://github.com/baloise/design-system/commit/653a2b60e0a641809a3ab37908723c76ac6a49ff))
- **checkbox:** enable grouped checkboxes ([b004c35](https://github.com/baloise/design-system/commit/b004c350587872c08e8619a1bc2dc5f7ebf58e8b)), closes [#497](https://github.com/baloise/design-system/issues/497)
- **datepicker:** improve mobile layout ([16d4e1f](https://github.com/baloise/design-system/commit/16d4e1f4b0a8f11dce56e7c17e95e408250aef2d))
- **field:** add more space for error message ([e09d751](https://github.com/baloise/design-system/commit/e09d751120751cf8e9deca319ad3eaa247f75271))
- **heading:** enable visual headings ([cc27093](https://github.com/baloise/design-system/commit/cc270937f90917226d6adc1ea3a6ca247cb4a03d))
- **i18n:** fix typo in updateBalLanguage ([e3612de](https://github.com/baloise/design-system/commit/e3612deaa30ade446dd278e42ccdacd2f940a6bc))
- **input:** always return the raw value ([50294d2](https://github.com/baloise/design-system/commit/50294d2b8d9280b1b6b2ff8425f5d6d5f875e364))
- **react:** auto define components ([2060327](https://github.com/baloise/design-system/commit/2060327c97339ea7247f47aa3e3fa650a952a143))
- **react:** change .mjs to .esm.js ([7d2f7e5](https://github.com/baloise/design-system/commit/7d2f7e549a1dcff250ef57c214c25ca83e58c634))
- **select:** remove duplicated id ([f585255](https://github.com/baloise/design-system/commit/f585255dd29e7331890318ea4e8e162b53fd84a1))
- **typography:** use rem instead of px, add mobile size variant ([0f5ed12](https://github.com/baloise/design-system/commit/0f5ed128794419b1a52bdeff69c79d89f5a48479))
- use utils from web-app-utils ([ef7432c](https://github.com/baloise/design-system/commit/ef7432c02cec65a6ea09a63ac8869e7f919f83bf))
- **vue:** improve exports ([be51095](https://github.com/baloise/design-system/commit/be51095ac1032fffbdf492cbbc96f3aaf34bba42))

## [10.1.0](https://github.com/baloise/design-system/compare/v10.0.0...v10.1.0) (2022-02-16)

### Features

- **badge:** add new component ([1be6bb6](https://github.com/baloise/design-system/commit/1be6bb6d347d821932ae760b9611acfde035c48e))
- **badge:** add postion for button, tabs and card ([e250a99](https://github.com/baloise/design-system/commit/e250a994fc6c8cc9402f7685fd6e25c2e5d28301))
- **checkbox:** add vertical prop ([85fab4e](https://github.com/baloise/design-system/commit/85fab4e6dd3320ed4d2df5f61668491cf8e2e57e))
- **close:** add new component ([9376e65](https://github.com/baloise/design-system/commit/9376e6541c7a138264d3d23db1b63a459f57916a))
- **input-group:** add new component ([368846f](https://github.com/baloise/design-system/commit/368846f0f2c7daafff45aa2b063046d1c84d7069))
- **radio:** add vertical prop ([ed63b7e](https://github.com/baloise/design-system/commit/ed63b7ef8ca50f9b7d94a701677fd3cb54df7488))
- **spacing:** add mt-auto ([82d71a0](https://github.com/baloise/design-system/commit/82d71a090613aa50f1754d848d0099fe44f82fe8))
- **style:** add opacity css helpers ([d3fd351](https://github.com/baloise/design-system/commit/d3fd3516f70bf83ab45d953b065d7e437ef55051))

### Bug Fixes

- **button-group:** use whole width ([a481f87](https://github.com/baloise/design-system/commit/a481f874c591e934833a049219933557b7a18f66))
- **heading:** add missing styles for h6 ([067153b](https://github.com/baloise/design-system/commit/067153b79308bd923b1af2abae9eb32db4d9ea8b))
- **list:** add large size ([55d6dcf](https://github.com/baloise/design-system/commit/55d6dcfeee47ece4944e0aa9ba3ba90697ac097b))
- **list:** adjust spacing for content items ([50e21a0](https://github.com/baloise/design-system/commit/50e21a0f4d92912b663e4d436e7c48b8fa5e031b))
- **list:** rework flexbox ([0c422b5](https://github.com/baloise/design-system/commit/0c422b58da537a98ee4a4642bcd30d4710e9dacf))
- **modal:** on mobile buttons are at the bottom ([ff93cde](https://github.com/baloise/design-system/commit/ff93cde897fc687b208333d6e7c697f7436df6e1))
- **pagination:** use bal-button ([540cc3f](https://github.com/baloise/design-system/commit/540cc3f40eb73e74deab91cce41f7c04e16bbacb))
- **select-button:** add support for mobile devices ([75647d2](https://github.com/baloise/design-system/commit/75647d2a8424e80b012650b78329f9d86aeedac6))
- **select:** check if option is there ([1fc58d9](https://github.com/baloise/design-system/commit/1fc58d9e9ebd5cd586a96d9216592dbb56b7dd51))

## [10.0.0](https://github.com/baloise/design-system/compare/v9.2.2...v10.0.0) (2022-02-10)

### ⚠ BREAKING CHANGES

- **checkbox:** use checked as the new value property
- **angular:** rename core module and need to add the used component modules.

### Features

- **angular:** component based modules instead of one ([5395696](https://github.com/baloise/design-system/commit/5395696d3d659928a67bebfff216615a9bf6a98a))
- **field:** add hint props to bal-flield-hint ([a4ee057](https://github.com/baloise/design-system/commit/a4ee057abd1261e136997add251ebfeb58b600e8))
- **i18n:** onBalConfigChange ([87af016](https://github.com/baloise/design-system/commit/87af0165b49352befbc26b68cd29239ac4f5c514))
- **list:** add native ul & ol styles ([3f3f375](https://github.com/baloise/design-system/commit/3f3f375f11baa0cb431504657baa2df041f851a4))

### Bug Fixes

- **button:** adjust spacing for mobile ([ec73ebd](https://github.com/baloise/design-system/commit/ec73ebd97910470788dae08497ebc5c32dd71bad))
- **checkbox:** enable grouped checkboxes ([b004c35](https://github.com/baloise/design-system/commit/b004c350587872c08e8619a1bc2dc5f7ebf58e8b)), closes [#497](https://github.com/baloise/design-system/issues/497)
- **heading:** enable visual headings ([cc27093](https://github.com/baloise/design-system/commit/cc270937f90917226d6adc1ea3a6ca247cb4a03d))
- **i18n:** fix typo in updateBalLanguage ([e3612de](https://github.com/baloise/design-system/commit/e3612deaa30ade446dd278e42ccdacd2f940a6bc))
- **input:** always return the raw value ([50294d2](https://github.com/baloise/design-system/commit/50294d2b8d9280b1b6b2ff8425f5d6d5f875e364))
- **sheet:** adjust spacing ([c1e83a5](https://github.com/baloise/design-system/commit/c1e83a551176f135b3aa34ec1a702afa5f5e1085))
- **vue:** improve exports ([be51095](https://github.com/baloise/design-system/commit/be51095ac1032fffbdf492cbbc96f3aaf34bba42))

### [9.2.1](https://github.com/baloise/design-system/compare/v9.2.0...v9.2.1) (2022-02-03)

### Bug Fixes

- improve config usage with proxy libs ([196873c](https://github.com/baloise/design-system/commit/196873ccba17f9807c4bc439591b802ca03fa485))

## [9.2.0](https://github.com/baloise/design-system/compare/v9.1.0...v9.2.0) (2022-02-01)

### Features

- **checkbox:** add group component ([3c5b611](https://github.com/baloise/design-system/commit/3c5b611d33b585a8e5c9408d2f92f787501e0b42))

### Bug Fixes

- **accordion:** add missing spacing in combination with cards ([adc4e85](https://github.com/baloise/design-system/commit/adc4e85779ee44a2e65efeb5b8610f260beb76f8))
- **form:** add name attribute to form controls ([5491305](https://github.com/baloise/design-system/commit/5491305179341b2d3249921287004f2aef8e0f70))
- **radio:** adjust spacing between radio buttons ([8822469](https://github.com/baloise/design-system/commit/8822469ef0fe0944f4eb16420519838719911597))

## [9.1.0](https://github.com/baloise/design-system/compare/v9.0.7...v9.1.0) (2022-01-31)

### Features

- add internationalization ([d50e3ca](https://github.com/baloise/design-system/commit/d50e3ca7462b8991ce0c3941f0465e262679795a))
- **config:** add date and number formats to global config ([8e2b9d0](https://github.com/baloise/design-system/commit/8e2b9d09dca8fcbc63d918ccc83e1e5873952bed))

### Bug Fixes

- **button:** adjust button order on mobile ([2640e1c](https://github.com/baloise/design-system/commit/2640e1c4a85bb5915d83d557234e44d51487ac2a)), closes [#475](https://github.com/baloise/design-system/issues/475)
- **data:** adjust mobile view ([9e3921f](https://github.com/baloise/design-system/commit/9e3921f83bc6a9df18b50b8fb52dc2a124eaca03)), closes [#461](https://github.com/baloise/design-system/issues/461) [#477](https://github.com/baloise/design-system/issues/477)
- **datepicker:** resolve max attribute logic ([8b200b6](https://github.com/baloise/design-system/commit/8b200b625e0cf426957c488fa65eb14a4f62a94c)), closes [#445](https://github.com/baloise/design-system/issues/445)
- **form:** improve invalid style ([cf9902f](https://github.com/baloise/design-system/commit/cf9902fa46bf7253153c2a471f51fa05199cd639))
- **form:** improve sync of props ([98db4a1](https://github.com/baloise/design-system/commit/98db4a1bde80859c8078988cf9ce7d581b9bbfd7))
- **navbar:** remove margin bottom ([a22a072](https://github.com/baloise/design-system/commit/a22a072280ca9f27c52b3df0fb17c8e38cc5067a))
- **pagination:** adjust for mobile view ([c25a04d](https://github.com/baloise/design-system/commit/c25a04dd18f6d5c4070e7cb045e032ec97a31426)), closes [#476](https://github.com/baloise/design-system/issues/476)
- **radio:** remove inconsistent shade ([91aa2e3](https://github.com/baloise/design-system/commit/91aa2e317226eeffc7dcae4a648c5a4c2295ffdf)), closes [#386](https://github.com/baloise/design-system/issues/386)
- **vue:** add plugin function with better typesafty ([b1b29de](https://github.com/baloise/design-system/commit/b1b29de4833944c9d8265943c7d47e3d28eef9fd))

### [9.0.7](https://github.com/baloise/design-system/compare/v9.0.6...v9.0.7) (2022-01-27)

### Bug Fixes

- remove baloiseStencilViteFix from postinstall ([d185d0d](https://github.com/baloise/design-system/commit/d185d0d433f5b48307f78d7f36d0e690b3905f8e))

### [9.0.6](https://github.com/baloise/design-system/compare/v9.0.5...v9.0.6) (2022-01-25)

### Bug Fixes

- **vue:** add vite support ([cf0c356](https://github.com/baloise/design-system/commit/cf0c356db330fad53685146528da23faca4da0cf))

### [9.0.5](https://github.com/baloise/design-system/compare/v9.0.4...v9.0.5) (2022-01-20)

### Bug Fixes

- **modal:** break text in modal title ([f7ccd46](https://github.com/baloise/design-system/commit/f7ccd46f30f7db1bec8a97392839b34df86d7323))
- **vue:** add better vite support ([6503327](https://github.com/baloise/design-system/commit/6503327cb43193f432d5f0bccd47ac5955fefa9a))

### [9.0.4](https://github.com/baloise/design-system/compare/v9.0.3...v9.0.4) (2022-01-19)

### Bug Fixes

- **hint:** adjust mobile view ([df56521](https://github.com/baloise/design-system/commit/df5652119d8dcc5768f417bd47c12176e6a8f61e))
- **list:** remove margin top ([500753d](https://github.com/baloise/design-system/commit/500753d4ce8b459ca0dae795868e24f9df6efe42))
- **vue:** add better vite support ([6503327](https://github.com/baloise/design-system/commit/6503327cb43193f432d5f0bccd47ac5955fefa9a))

### [9.0.3](https://github.com/baloise/design-system/compare/v9.0.2...v9.0.3) (2022-01-18)

### Bug Fixes

- **container:** use real value for the angular scss compiler ([5257ef4](https://github.com/baloise/design-system/commit/5257ef4c59101a73ba551aa835fdb06d5cc64415))
- **proxy:** export ProxyComponent interface ([6d7d085](https://github.com/baloise/design-system/commit/6d7d085a3890fce8a544cd594dfea4af2a75ecfe))

### [9.0.2](https://github.com/baloise/design-system/compare/v9.0.1...v9.0.2) (2022-01-17)

### Bug Fixes

- **card:** add missing subcomponents ([49fef91](https://github.com/baloise/design-system/commit/49fef913afefb44d177a98965bfc5bcc1d65f325))

### [9.0.1](https://github.com/baloise/design-system/compare/v9.0.0...v9.0.1) (2022-01-11)

### Bug Fixes

- **hint:** adjust mobile view ([df56521](https://github.com/baloise/design-system/commit/df5652119d8dcc5768f417bd47c12176e6a8f61e))
- **list:** remove margin top ([500753d](https://github.com/baloise/design-system/commit/500753d4ce8b459ca0dae795868e24f9df6efe42))

## [9.0.0](https://github.com/baloise/design-system/compare/v8.0.1...v9.0.0) (2022-01-10)

Follow the migration guide [Migration from 8.x to 9.x](https://design.baloise.dev/?path=/story/migration-migration-from-8-x-to-9-x--page)

### ⚠ BREAKING CHANGES

- **card:** remove all card sub-components
- **modal:** remove bal-modal-footer
- **card:** remove all the sub components and use css helpers and existing components
- **angular:** Rename checked to value of the bal-checkbox
- **tabs:** add value prop,
  rename balTabChange to balChange and remove active tab on tab items
- **hint:** Rename open to present and close to dismiss
- **popover:** Renamed is-active to value and balCollapse to balChange
- **accordion:** Renamed is-active to value and balCollapse to balChange
- **form:** Removed prop expanded, removed component bal-dropdown-trigger
  and renamed bal-dropdown to bal-popover
- **modal:** Removed bal-modal-actions

### Features

- **accordion:** add two way binding ([eeda1c0](https://github.com/baloise/design-system/commit/eeda1c018259b75eeeec4c62ed94cb9a8e27551c))
- **button:** add bal-button-group component ([deb9394](https://github.com/baloise/design-system/commit/deb93949d6ccf5ca4c5637f1d884667d1531add9))
- **card:** simplify usage ([66c2d67](https://github.com/baloise/design-system/commit/66c2d676ccd473f4c0348b62a412afa178ad993c))
- **popover:** add two way binding ([e3f01d2](https://github.com/baloise/design-system/commit/e3f01d20dc00e5d5b736aa56954e8d9dff6c1d72))
- **tabs:** able to change value with the active prop on the bal-tab-item ([f9553cb](https://github.com/baloise/design-system/commit/f9553cb501eb390f6964e8dd881228ded36e623c))
- **tabs:** add two way binding ([aaf41a1](https://github.com/baloise/design-system/commit/aaf41a1f8af91a6f8d7907b085e7c66b64ce664f))

### Bug Fixes

- **angular:** adjust boolean accessor for two way binding ([ed57dcc](https://github.com/baloise/design-system/commit/ed57dccec735d65887d44d3d79e4f6cdb94f1877))
- **angular:** enable two way binding ([8602df8](https://github.com/baloise/design-system/commit/8602df8151c075648bed48269a6ca1657f00c80f))
- **form:** set expanded as default and use popper.js for the popovers ([0845ade](https://github.com/baloise/design-system/commit/0845ade7eb5248a912c5eff36bba9f4aa9ed9c1a))
- **hint:** use standard method names ([b1f4040](https://github.com/baloise/design-system/commit/b1f40409f8f7ab5e1fb70ba4551c868d209d4811))
- **modal:** remove action component, improve large content and popovers ([1095dab](https://github.com/baloise/design-system/commit/1095dabee411579744119b03a922e23b8f878d7e))
- **modal:** simplify usage ([69de08d](https://github.com/baloise/design-system/commit/69de08dc66073340f32833db9139639ace88ec5b))
- **notices:** add missing padding ([82333e1](https://github.com/baloise/design-system/commit/82333e13493cd6e67e9d70286fb06472f5cc82f3))
- **notification:** adjust paddings ([f7eab49](https://github.com/baloise/design-system/commit/f7eab497dbe6b84e56ee3da4bbf6966fb37069b7))
- update deps ([a316a3e](https://github.com/baloise/design-system/commit/a316a3ec535329fbea12c0ae3a5ad1639414c22a))

### Code Refactoring

- **card:** reduce amount of components ([905bc0c](https://github.com/baloise/design-system/commit/905bc0c872aeb859896aa58259dd9509d6a8fb22))

### [8.0.1](https://github.com/baloise/design-system/compare/v8.0.0...v8.0.1) (2022-01-05)

### Bug Fixes

- **container:** increase the level of is-compact ([db08332](https://github.com/baloise/design-system/commit/db08332c9947b0c6808d599bdda08a225f03668d))

## [8.0.0](https://github.com/baloise/design-system/compare/v7.0.1...v8.0.0) (2022-01-05)

### ⚠ BREAKING CHANGES

- **tabs:** `rounded` prop is removed use `interface` `tabs-sub`
  - Follow the migration guide [Migration from 7.x to 8.x](https://design.baloise.dev/?path=/story/migration-migration-from-7-x-to-8-x--page)

### Features

- **tabs:** add sub-navigation ([7822461](https://github.com/baloise/design-system/commit/7822461d09c88030146a94b03785a7cb53b1c418))

### Bug Fixes

- **footer:** adjust hide links ([e48f10f](https://github.com/baloise/design-system/commit/e48f10f5cbbe0335fbc453319dfc98122f968eab))
- **form:** adjust expanded style ([d5ae8d0](https://github.com/baloise/design-system/commit/d5ae8d0404483fbcfe86cd0d619d4cdf45e01d37))
- **style:** remove global styles from utilities ([b943436](https://github.com/baloise/design-system/commit/b94343667b912a9a6735e452a5aab431bdd94e25))

### Code Refactoring

- **tabs:** remove rounded option ([9da1c71](https://github.com/baloise/design-system/commit/9da1c714ee0fa4a19981de69f673983243794e10))

# [7.0.0](https://github.com/baloise/design-system/compare/v6.0.0...v7.0.0) (2022-01-04)

### BREAKING CHANGES

- The unsupported browsers has been moved to [@baloise/web-app-unsupported-browsers](https://github.com/baloise/web-app-utils/tree/master/packages/unsupported-browsers).
  - Follow the migration guide [Migration from 6.x to 7.x](https://design.baloise.dev/?path=/story/migration-migration-from-6-x-to-7-x--page)

# [6.0.0](https://github.com/baloise/design-system/compare/v5.0.0...v6.0.0) (2021-12-28)

### BREAKING CHANGES

- Added and improved the css helper classes.
  - Follow the migration guide [Migration from 5.x to 6.x](https://design.baloise.dev/?path=/story/migration-migration-from-5-x-to-6-x--page)

### Features

- **css-helpers:** improve color, border, radius, flexbox, visibility and shadow ([25d1fc](https://github.com/baloise/design-system/commit/25d1fc6c75cb0688e03fd73c7444f39ceb2a49e1))

## [5.0.2](https://github.com/baloise/design-system/compare/v5.0.1...v5.0.2) (2021-12-22)

### Bug Fixes

- **core:** ignore components.d.ts and export types only in the types.d.ts file ([7b1e705](https://github.com/baloise/design-system/commit/7b1e705d290c9d306890d30f3e65b7b5a06bdf92))

# [5.0.0](https://github.com/baloise/design-system/compare/v4.0.0...v5.0.0) (2021-12-20)

### BREAKING CHANGES

- The component `bal-app` lost his props, due better integration for our proxy libraries.
  - Follow the migration guide [Migration from 4.x to 5.x](https://design.baloise.dev/?path=/story/migration-migration-from-4-x-to-5-x--page)

### Features

- **vue:** add modal controller ([097e08](https://github.com/baloise/design-system/pull/420/commits/097e08a7a01546294ac9a2858e4db1f82e571b50))

## [4.3.1](https://github.com/baloise/design-system/compare/v4.3.0...v4.3.1) (2021-12-15)

### Bug Fixes

- add missing sass files of the components ([2efa8ca](https://github.com/baloise/design-system/commit/2efa8ca11e4f0541f01320485a409ac0a003bf5a))

# [4.3.0](https://github.com/baloise/design-system/compare/v4.2.0...v4.3.0) (2021-12-15)

### Bug Fixes

- **stencil:** adjust build artifacts for the docs ([fec6c9f](https://github.com/baloise/design-system/commit/fec6c9fb1acfb86a642c4fdd7d58dcf20a8948bd))
- **vue:** need to remove experimental vite support ([749ca74](https://github.com/baloise/design-system/commit/749ca74228f7990da6dad07e161abc421bf183c4))

### Features

- add component style to global sass file for customization ([f57d254](https://github.com/baloise/design-system/commit/f57d25485f19650430aa5218af6e3f501bd858b9))
- add component style to global sass file for customization ([17bd5e0](https://github.com/baloise/design-system/commit/17bd5e0d28cb55809e903408595f8ee0547b8712))
- add component style to global sass file for customization ([0b9a471](https://github.com/baloise/design-system/commit/0b9a471a58c7e8d1786819c58153fd0cef9d3c66))
- **hint:** add small variant ([d33f273](https://github.com/baloise/design-system/commit/d33f273d43702441947b61a3b9cd5112456c7260))
- **stencil:** update version 2.11.0 ([b9a8c25](https://github.com/baloise/design-system/commit/b9a8c2561d880e8ced0cf413a9eb190841d9b4f5))

# [4.2.0](https://github.com/baloise/design-system/compare/v4.1.2...v4.2.0) (2021-12-15)

### Bug Fixes

- **vue:** need to remove experimental vite support ([749ca74](https://github.com/baloise/design-system/commit/749ca74228f7990da6dad07e161abc421bf183c4))

### Features

- add component style to global sass file for customization ([f57d254](https://github.com/baloise/design-system/commit/f57d25485f19650430aa5218af6e3f501bd858b9))
- add component style to global sass file for customization ([17bd5e0](https://github.com/baloise/design-system/commit/17bd5e0d28cb55809e903408595f8ee0547b8712))
- add component style to global sass file for customization ([0b9a471](https://github.com/baloise/design-system/commit/0b9a471a58c7e8d1786819c58153fd0cef9d3c66))
- **hint:** add small variant ([d33f273](https://github.com/baloise/design-system/commit/d33f273d43702441947b61a3b9cd5112456c7260))
- **stencil:** update version 2.11.0 ([b9a8c25](https://github.com/baloise/design-system/commit/b9a8c2561d880e8ced0cf413a9eb190841d9b4f5))

## [4.1.2](https://github.com/baloise/design-system/compare/v4.1.1...v4.1.2) (2021-12-15)

### Bug Fixes

- **button:** improve icon inverted style ([28a4147](https://github.com/baloise/design-system/commit/28a4147dbebf22cecd142beb26a7ae761769a2bc))
- **checkbox:** adjust switch style ([fda5174](https://github.com/baloise/design-system/commit/fda517471049fd80a771125882245b872c550313))

# 4.1.0 (2021-12-10)

## [4.1.1](https://github.com/baloise/design-system/compare/v4.1.0...v4.1.1) (2021-12-13)

### Bug Fixes

- **button:** adjust the color of the icon for outlined ([d8f71e0](https://github.com/baloise/design-system/commit/d8f71e0f7ef250e1c55cd6e9a4c62c55ecf2bffe))

# [4.1.0](https://github.com/baloise/design-system/compare/v4.0.3...v4.1.0) (2021-12-10)

### Bug Fixes

- **radio:** adjust space between radio and label ([72f3a88](https://github.com/baloise/design-system/commit/72f3a880ee89cb2884d40c97cefa893544243f38))
- **vue:** element fn parameter will be used as unref ([e2b1302](https://github.com/baloise/design-system/commit/e2b13020a75f3af8a0cd9accd84900d9c444f2d0))

### Features

- **angular:** add element helper function ([6a7e57a](https://github.com/baloise/design-system/commit/6a7e57a0d6bf9f8d6e9f58cfe11b66abb4ef31e1))
- **component:** return helper functions like wait, getAppRoot, componentOnReady ([7797fb3](https://github.com/baloise/design-system/commit/7797fb394ddb802dde43dc95aec49cd129d53475))
- return helper isDescendant ([0c1b8ca](https://github.com/baloise/design-system/commit/0c1b8ca51cd1d17d50b1ae031f1a684bd902a2f0))

## [4.0.3](https://github.com/baloise/design-system/compare/v4.0.2...v4.0.3) (2021-12-09)

### Bug Fixes

- **component:** add 100% width to container ([c3aface](https://github.com/baloise/design-system/commit/c3afacec87653953fd290edf004203b5b1a85314))

## [4.0.1](https://github.com/baloise/design-system/compare/v4.0.0...v4.0.1) (2021-12-09)

### Bug Fixes

- **angular:** use ng-packagr 10.1.2 ([de33875](https://github.com/baloise/design-system/commit/de338758effbc93f6330f2a6f727131430641d18))
- remove lodash.isArray ([53a642b](https://github.com/baloise/design-system/commit/53a642be572218feab5c3218c7c3969d57d233f0))

# [4.0.0](https://github.com/baloise/design-system/compare/v3.0.0...v4.0.0) (2021-12-08)

### BREAKING CHANGES

- The breakpoints and spacing helpers are adjusted to new guidlines and duplicated/old css class are removed.
  - Follow the migration guide [Migration from 3.x to 4.x](https://design.baloise.dev/?path=/story/migration-migration-from-3-x-to-4-x--page)

### Features

- **spacing:** add responsive spacing helpers ([bc8588d](https://github.com/baloise/design-system/commit/bc8588d6f4e777b9769401f77de5b82be8ef41b7))
- **file-upload:** add prop has-file-list ([5b9d051](https://github.com/baloise/design-system/commit/5b9d051d8293f655d49fc30fd88400870730dfdf))
- **container:** add compact option ([f509fd3](https://github.com/baloise/design-system/commit/f509fd3481b23f66d3b5fa13b84b18bd761521ca))

### Bug Fixes

- **datepicker:** adjust min max behaviour ([f469440](https://github.com/baloise/design-system/commit/f469440d36fd423443971316d6aad1e29c172d6d))
- **select:** adjust selected background ([d9e28ae](https://github.com/baloise/design-system/commit/d9e28aeed7e9df65e88653322ef0f544419645d8))
- **sheet:** improve spacing ([285857f](https://github.com/baloise/design-system/commit/285857f28fd98c14a654da82a5ed68f19af492f1))
- **hint:** adjust spacing and font size ([f2773b7](https://github.com/baloise/design-system/commit/f2773b78fa1acca194cfad3bfb58b66bf0d92e3f))

# [3.0.0](https://github.com/baloise/design-system/compare/v2.0.5...v3.0.0) (2021-12-03)

### BREAKING CHANGES

- `has-sticky-footer` has to be set explicit to the `ba-app` component.
  - Follow the migration guide [Migration from 2.x to 3.x](https://design.baloise.dev/?path=/story/migration-migration-from-2-x-to-3-x--page)

## [2.0.5](https://github.com/baloise/design-system/compare/v2.0.4...v2.0.5) (2021-11-24)

### Bug Fixes

- **file-upload:** using @baloise/web-app-utils for areArraysEqual ([a0b4793](https://github.com/baloise/design-system/commit/a0b47939bc39a5e97755d2f57504ca554971874b))

## [2.0.3](https://github.com/baloise/design-system/compare/v2.0.2...v2.0.3) (2021-11-23)

### Bug Fixes

- **heading:** add missing subtile color ([7572254](https://github.com/baloise/design-system/commit/7572254cc29ffc298cca4f89327789626f5391ec))

## [2.0.0](https://github.com/baloise/design-system/compare/v1.19.10...v2.0.0) (2021-11-22)

### BREAKING CHANGES

- Moved utils, filters/pipes and validators to [web-app-utils](https://github.com/baloise/web-app-utils) packages.
  - Follow the migration guide [Migration from 1.x to 2.x](https://design.baloise.dev/components/migration/migration-from-1.x.html)

### Bug Fixes

- modal: fix width issue with the close button

## [1.19.10](https://github.com/baloise/design-system/compare/v1.19.9...v1.19.10) (2021-11-17)

### Bug Fixes

- lock version issue ([a557276](https://github.com/baloise/design-system/commit/a557276dc09b972d630c7961efda9c1db0fbf823))

## [1.19.9](https://github.com/baloise/design-system/compare/v1.19.8...v1.19.9) (2021-11-17)

### Bug Fixes

- **testing:** add textarea ([0b9f7b9](https://github.com/baloise/design-system/commit/0b9f7b9091c1a0a95016c5b8dc02423666a5cf62))
- **testing:** improve isElemen function ([531e497](https://github.com/baloise/design-system/commit/531e4976cd57b332d39e89c9f5ee1cb419dedff7))

## [1.19.7](https://github.com/baloise/design-system/compare/v1.19.6...v1.19.7) (2021-11-11)

### Bug Fixes

- **footer:** styling of links ([45abc70](https://github.com/baloise/design-system/commit/45abc70d5e2917e2061f03511b797e273bed061f))

## [1.19.6](https://github.com/baloise/design-system/compare/v1.19.5...v1.19.6) (2021-11-10)

### Bug Fixes

- **footer:** update styling ([30d45c3](https://github.com/baloise/design-system/commit/30d45c310ecc6e812f07b82be2a5e1250de7b72f))

## [1.19.5](https://github.com/baloise/design-system/compare/v1.19.4...v1.19.5) (2021-11-10)

### Bug Fixes

- **select:** Skip one single test to test if the build is working ([516021f](https://github.com/baloise/design-system/commit/516021fc3d93beff9819a9667abc29e6aa4cdd73))

## 1.19.3 (2021-11-09)

## [1.19.4](https://github.com/baloise/design-system/compare/v1.19.3...v1.19.4) (2021-11-10)

### Bug Fixes

- **select:** Skip one single test to test if the build is working ([516021f](https://github.com/baloise/design-system/commit/516021fc3d93beff9819a9667abc29e6aa4cdd73))

## [1.19.2](https://github.com/baloise/design-system/compare/v1.19.1...v1.19.2) (2021-11-09)

### Bug Fixes

- **footer:** Missing import ([3d4eaeb](https://github.com/baloise/design-system/commit/3d4eaebe336883a7cd72378de25963715af5fa08))
- **footer:** Update links when locale changes ([7911b9b](https://github.com/baloise/design-system/commit/7911b9b2e039dae52002d09e33e3fdb441c57503))

## [1.19.1](https://github.com/baloise/design-system/compare/v1.19.0...v1.19.1) (2021-10-08)

# [1.19.0](https://github.com/baloise/design-system/compare/v1.18.15...v1.19.0) (2021-10-08)

### Features

- **footer:** add dynamic baloise links ([263a661](https://github.com/baloise/design-system/commit/263a6617fc59217963149ef480785f89a51de965))

## [1.18.15](https://github.com/baloise/design-system/compare/v1.18.14...v1.18.15) (2021-10-08)

## 1.18.13 (2021-10-08)

**Note:** Version bump only for package root

## [1.18.14](https://github.com/baloise/design-system/compare/v1.18.13...v1.18.14) (2021-10-08)

### Bug Fixes

- **link:** add inverted style ([e801ef6](https://github.com/baloise/design-system/commit/e801ef62237238760e8831ea30398b3bc5e6faf7))

## [1.18.13](https://github.com/baloise/design-system/compare/v1.18.12...v1.18.13) (2021-10-08)

**Note:** Version bump only for package root

## [1.18.12](https://github.com/baloise/design-system/compare/v1.18.11...v1.18.12) (2021-10-07)

### Bug Fixes

- release workflow ([0a0f8f1](https://github.com/baloise/design-system/commit/0a0f8f1324634d1c6681ee5cc4806237be429323))

## [1.18.7](https://github.com/baloise/design-system/compare/v1.18.6...v1.18.7) (2021-10-07)

### Bug Fixes

- **list:** use flexbox ([2c34f09](https://github.com/baloise/design-system/commit/2c34f09033fa2f8b4c9b2790c9209b225240f668))

## [1.18.6](https://github.com/baloise/design-system/compare/v1.18.5...v1.18.6) (2021-10-05)

### Bug Fixes

- **modal:** add card class on user element ([8515746](https://github.com/baloise/design-system/commit/8515746fb0efc68ef029c86f6e5963e0b8e68fd5))

## [1.18.3](https://github.com/baloise/design-system/compare/v1.18.2...v1.18.3) (2021-10-05)

### Bug Fixes

- add fixed sub package versions ([0ab2c03](https://github.com/baloise/design-system/commit/0ab2c03904b732d227fdd1345d2088b9b3a978aa))

## [1.18.2](https://github.com/baloise/design-system/compare/v1.18.1...v1.18.2) (2021-10-05)

### Bug Fixes

- add fixed sub package versions ([da41daf](https://github.com/baloise/design-system/commit/da41dafe664826ffc98c33f74c5625399d388a63))

# [1.18.0](https://github.com/baloise/design-system/compare/v1.17.0...v1.18.0) (2021-10-05)

### Bug Fixes

- **card:** adjust primary color ([da530b7](https://github.com/baloise/design-system/commit/da530b707e5833cbd9546339e787bebf9913183f))
- **datepicker:** limit month & year select when using min and max ([d06fd72](https://github.com/baloise/design-system/commit/d06fd7239856bb4e559fc338267507157465a16b))
- **notification:** adjust padding and link colors ([da48a01](https://github.com/baloise/design-system/commit/da48a010967d9bc151e09513f1aaca7836bb9a1c))

### Features

- **modal:** add mobile solution and fix custom width ([3308957](https://github.com/baloise/design-system/commit/3308957eb7971382904fc8fa58fa5ae05848ea5e))
- **modal:** add mobile view ([0fb0d27](https://github.com/baloise/design-system/commit/0fb0d277bb7213ec29e3855b22f917a2abcca4ea))
- **stepper:** add stepper template ([4b02cae](https://github.com/baloise/design-system/commit/4b02cae763b40fc8f31d3d15f58abb8caf85fffe))

# [1.17.0](https://github.com/baloise/design-system/compare/v1.16.2...v1.17.0) (2021-10-01)

### Bug Fixes

- **card:** adjust spacing ([2b7c745](https://github.com/baloise/design-system/commit/2b7c7459897cb080ccd884183928eb5cfe80a30d))
- **container:** adjust container to new paddings ([d033195](https://github.com/baloise/design-system/commit/d0331959c6de4a7eb53d95f6bfec8582bd36afc6))
- **select:** fix arrow key navigation on focus ([fd77ff4](https://github.com/baloise/design-system/commit/fd77ff4e7485981f29f12b37f1cba9f144d72b0a))
- **tabs:** adjust disabled style ([3813bf7](https://github.com/baloise/design-system/commit/3813bf7d7b942fc4e0f4f2b2de68efe12c0f1428))
- **testing:** fix cy.url().should() ([156d9b4](https://github.com/baloise/design-system/commit/156d9b4d7c38337e6ac5820fa292c527a27e6a14))

### Features

- **button:** add button group helper css class ([a03dcf3](https://github.com/baloise/design-system/commit/a03dcf3a201dd0cc8c851dbca274adfe6e000780))

## [1.16.2](https://github.com/baloise/design-system/compare/v1.16.1...v1.16.2) (2021-09-29)

# 1.16.0 (2021-09-29)

**Note:** Version bump only for package root

## [1.16.1](https://github.com/baloise/design-system/compare/v1.16.0...v1.16.1) (2021-09-29)

**Note:** Version bump only for package root

# [1.16.0](https://github.com/baloise/design-system/compare/v1.15.1...v1.16.0) (2021-09-29)

### Bug Fixes

- **button:** fix loading state with icons ([5d31e89](https://github.com/baloise/design-system/commit/5d31e892fbdb7de6a00b12c45c9cf47ffff3c8a3))
- **modal:** adjust paddings ([d13e24b](https://github.com/baloise/design-system/commit/d13e24b55ccce34773ff7805909ecb068d54e509))
- **radio:** remove debugger statement ([c555113](https://github.com/baloise/design-system/commit/c5551135792e1fe76844c4676b2360b1fc19c011))
- **select:** improve clear and key navigation ([e77479d](https://github.com/baloise/design-system/commit/e77479df925bff61bc39e224309c0a2c95564512))
- **select:** improve disabled look ([069b80d](https://github.com/baloise/design-system/commit/069b80d7c6552349922814f65f376c609fae75be))
- **select:** open dropdown with arrow keys ([f1621dd](https://github.com/baloise/design-system/commit/f1621ddd71651ce8d25e4ac9f1f02b2142201960))

### Features

- **file-upload:** add clear method ([ffcaa84](https://github.com/baloise/design-system/commit/ffcaa84f3b7ec49414a709dc50b5111287b0cbde))
- **filters:** add police number filter ([912e74b](https://github.com/baloise/design-system/commit/912e74b2ac29194e05fa54dc54bc6199a8ed3b26))

## [1.15.1](https://github.com/baloise/design-system/compare/v1.15.0...v1.15.1) (2021-09-22)

### Bug Fixes

- **dropdown:** remove possible border-bottom effect ([fad665e](https://github.com/baloise/design-system/commit/fad665e13fffa1dd311f39decaeae27ed3fd2bcd))

## 1.14.5 (2021-09-13)

# [1.15.0](https://github.com/baloise/design-system/compare/v1.14.5...v1.15.0) (2021-09-20)

### Bug Fixes

- **radio, checkbox:** improve reaction time

### Features

- **modal:** add modal service for angular
- **app:** introduce app component
- **toast, snackbar:** improve services and add duplication support
- **react:** add react proxy library

## [1.14.5](https://github.com/baloise/design-system/compare/v1.14.4...v1.14.5) (2021-09-13)

### Bug Fixes

- **testing:** add label support for checkbox & radio ([47c1dbe](https://github.com/baloise/design-system/commit/47c1dbee1359ec3ee59e60cd85489a2ca9bcaab6))

## [1.14.4](https://github.com/baloise/design-system/compare/v1.14.3...v1.14.4) (2021-09-13)

### Bug Fixes

- **angular:** use event.detail instead of event.target.value ([4709780](https://github.com/baloise/design-system/commit/47097800fc799de3d0c30a43e1a731836d9ed046))

## [1.14.3](https://github.com/baloise/design-system/compare/v1.14.2...v1.14.3) (2021-09-10)

### Bug Fixes

- **testing:** look for label instead of input for radio & checkbox ([9c26641](https://github.com/baloise/design-system/commit/9c2664126e1a2e0e0f159755bb1d95d0ac1dfdb3))

## [1.14.2](https://github.com/baloise/design-system/compare/v1.14.1...v1.14.2) (2021-09-10)

### Bug Fixes

- **testing:** add and command ([acddfb4](https://github.com/baloise/design-system/commit/acddfb4e83b4c180aca08cb848e21528ea6d644a))

## [1.14.1](https://github.com/baloise/design-system/compare/v1.14.0...v1.14.1) (2021-09-09)

### Bug Fixes

- **radio:** improve change emitting for faster reaction time ([3e3e6df](https://github.com/baloise/design-system/commit/3e3e6df3d4c6ba23f9637ef732dcb9e0c1e37d9d))
- **table:** alignt text to center for buttons ([b561840](https://github.com/baloise/design-system/commit/b561840c94fd63b82a3a272abcff67c182a72351))
- **table:** improve deliverments ([6999a48](https://github.com/baloise/design-system/commit/6999a48130876fd583e9657e12dd89226855b916))
- **testing:** remove console log ([e68c022](https://github.com/baloise/design-system/commit/e68c0224605d95eca2871441b45ba0840217da24))
- **toast&snackbar:** fix glitches when leaving the dom ([de9fd0e](https://github.com/baloise/design-system/commit/de9fd0e35430558041ff50e143c51cad3d567142))

# [1.14.0](https://github.com/baloise/design-system/compare/v1.13.3...v1.14.0) (2021-09-08)

### Bug Fixes

- **pagination:** reduce number of pages of mobile devices ([33959ec](https://github.com/baloise/design-system/commit/33959ec6c22d190397caabdbdd05f488182c5736))
- **table:** resolve deps ([00d98a8](https://github.com/baloise/design-system/commit/00d98a896a6961a0e7b3e8f6e82e3ba736421909))
- **tabs:** only fire tab change event ones ([3a15e4f](https://github.com/baloise/design-system/commit/3a15e4fe937d559c50cd45c83c1408891a53e64d))

### Features

- **testing:** add and override commands for accordion, button, datepicker and checkbox ([a80a5f6](https://github.com/baloise/design-system/commit/a80a5f603e7083500bc6a9d3aaf47d3fc3207deb))
- **testing:** add or override cypress commands for dropdown, input, modal, radio, select, tabs and toast ([e088819](https://github.com/baloise/design-system/commit/e088819b946bd5147825a6907bc64861becb2f9c))
- **testing:** add support for hint, pagination, slider and snackbar ([13f882c](https://github.com/baloise/design-system/commit/13f882c609abc108f014d1cefaa2befe95147022))
- **testing:** remove mixins and accessors ([8684a68](https://github.com/baloise/design-system/commit/8684a68c6bec275c07b2f810ad93c364bde7df97))

## [1.13.1](https://github.com/baloise/design-system/compare/v1.12.3...v1.13.1) (2021-09-06)

### Bug Fixes

- **text:** add word break ([28260a7](https://github.com/baloise/design-system/commit/28260a7cd71003c50cdd5b1d66b89210032da58c))

## [1.12.3](https://github.com/baloise/design-system/compare/v1.11.1...v1.12.3) (2021-09-01)

### Bug Fixes

- **testing:** improve select of radios ([ee64a27](https://github.com/baloise/design-system/commit/ee64a2756a1c513be38eaf81fc25312fadfa046e))

### Features

- **testing:** improve select accessor ([5b5a632](https://github.com/baloise/design-system/commit/5b5a6325c2e69b94c0740255073602848897d6e4))

## [1.13.3](https://github.com/baloise/design-system/compare/v1.13.2...v1.13.3) (2021-09-06)

### Bug Fixes

- **card:** don't break words ([0f5d2bf](https://github.com/baloise/design-system/commit/0f5d2bfe1ebb3b1cd2623439f761e86ac88062b7))

## [1.13.2](https://github.com/baloise/design-system/compare/v1.13.1...v1.13.2) (2021-09-06)

### Bug Fixes

- **table:** resolve deps ([00d98a8](https://github.com/baloise/design-system/commit/00d98a896a6961a0e7b3e8f6e82e3ba736421909))

## [1.13.1](https://github.com/baloise/design-system/compare/v1.13.0...v1.13.1) (2021-09-06)

### Bug Fixes

- **angular:** listens for the first given error ([67bd4c4](https://github.com/baloise/design-system/commit/67bd4c491e0e2425df218903caa19b626e34d615))
- only format value if number input is active ([23ba116](https://github.com/baloise/design-system/commit/23ba11659e3d6da588881a03cd53352765f8c659))
- update stencil to version 2.8.0 ([0f80d25](https://github.com/baloise/design-system/commit/0f80d257543619de4e83081cba95b49f55e0581e))

# [1.13.0](https://github.com/baloise/design-system/compare/v1.12.5...v1.13.0) (2021-09-03)

### Features

- **angular:** add bal-ng-error ([7f41482](https://github.com/baloise/design-system/commit/7f4148242640d54fc3ec0b33a39b83a43592492b))

## [1.12.4](https://github.com/baloise/design-system/compare/v1.12.3...v1.12.4) (2021-09-02)

### Bug Fixes

- **input:** enable normal input again ([1a29327](https://github.com/baloise/design-system/commit/1a29327d9f0eeeb707cae61863f63a6aca50a117))

## [1.12.3](https://github.com/baloise/design-system/compare/v1.12.2...v1.12.3) (2021-09-01)

### Bug Fixes

- **vue:** use detail instead of value from the change event ([f979fe9](https://github.com/baloise/design-system/commit/f979fe90acbfbc8abbf6071814647b0195f65d6a))

## [1.12.2](https://github.com/baloise/design-system/compare/v1.12.1...v1.12.2) (2021-09-01)

### Bug Fixes

- **vue:** use detail instead of value from the change event ([5e3c70c](https://github.com/baloise/design-system/commit/5e3c70c09d3fb1d58eb32865ae5ffd5e39cdf5ce))

## [1.12.1](https://github.com/baloise/design-system/compare/v1.12.0...v1.12.1) (2021-09-01)

### Bug Fixes

- **vue:** adjust types of the props ([41f29b1](https://github.com/baloise/design-system/commit/41f29b1175a5da6fc4f67f02e0e602b7ad4b64ec))

# [1.12.0](https://github.com/baloise/design-system/compare/v1.11.3...v1.12.0) (2021-08-31)

### Features

- **input:** add number-input with decimal ([ab473de](https://github.com/baloise/design-system/commit/ab473deacb867ffd44f23e76b0ed6f9400d5072e))

## [1.11.1](https://github.com/baloise/design-system/compare/v1.10.0...v1.11.1) (2021-08-23)

### Features

- **input:** add logic for checking if number entered is valid and add decimal property for number formating ([01818a7](https://github.com/baloise/design-system/commit/01818a7a862664b3733b597cd13569989aeb487a))

# [1.10.0](https://github.com/baloise/design-system/compare/v1.9.0...v1.10.0) (2021-08-16)

### Bug Fixes

- **input:** enable clipboard content ([4d4032e](https://github.com/baloise/design-system/commit/4d4032e15d457f67e9f404375dc767ca6bf58907))

### Features

- **table:** update ag-grid usage ([f083875](https://github.com/baloise/design-system/commit/f0838754edc5d8a907b1bec0fdf8b503e16e674d))

# [1.9.0](https://github.com/baloise/design-system/compare/v1.8.2...v1.9.0) (2021-08-12)

### Bug Fixes

- **datepicker:** fix fullwidth ([cddd3f2](https://github.com/baloise/design-system/commit/cddd3f2a459e7fb428096bda7b61586a29eda986))
- **input:** fix autofocus and add directives for angular and vue ([ef76dcf](https://github.com/baloise/design-system/commit/ef76dcf9b4ff160b3a38f2148081233407964b53))
- **select:** fix fullwidth ([9cf060a](https://github.com/baloise/design-system/commit/9cf060a6cbf269fa7e03f55d56d87497dcabe126))

### Features

- **testing:** add andable.ts and attachable.ts mixin description ([e918b8a](https://github.com/baloise/design-system/commit/e918b8a2db1e19b7eadd2e42deff697040b83e7d))

## [1.8.2](https://github.com/baloise/design-system/compare/v1.8.1...v1.8.2) (2021-08-06)

### Bug Fixes

- **table:** make styles accessable for angular & vue applications ([f5b5de5](https://github.com/baloise/design-system/commit/f5b5de5b9061bd600bf0ad5b9783b825b7b38c1c))

## 1.8.1 (2021-08-05)

## [1.11.3](https://github.com/baloise/design-system/compare/v1.11.2...v1.11.3) (2021-08-27)

### Bug Fixes

- **angular:** use .detail instead of .target.value ([4496cdd](https://github.com/baloise/design-system/commit/4496cdd2a06789eb430dbce1b96390644741352a))

## 1.11.1 (2021-08-23)

## [1.11.2](https://github.com/baloise/design-system/compare/v1.11.1...v1.11.2) (2021-08-27)

### Bug Fixes

- **angular:** use .detail instead of .target.value ([4496cdd](https://github.com/baloise/design-system/commit/4496cdd2a06789eb430dbce1b96390644741352a))

## [1.11.1](https://github.com/baloise/design-system/compare/v1.11.0...v1.11.1) (2021-08-23)

### Bug Fixes

- resolve packages ([2c14a4b](https://github.com/baloise/design-system/commit/2c14a4b0d3068661309f5c442c93f9e4a19b5751))
- **table:** center text of the button ([95945a3](https://github.com/baloise/design-system/commit/95945a39b330a7cb4fcd22b5dd42fad9b1c21e8c))

# [1.11.0](https://github.com/baloise/design-system/compare/v1.10.0...v1.11.0) (2021-08-23)

### Bug Fixes

- **checkbox:** remplace rem with pixel ([2095880](https://github.com/baloise/design-system/commit/20958801cf871f6082649fbdbc4adb8bd346acde))
- **input:** enable clipboard content ([4d4032e](https://github.com/baloise/design-system/commit/4d4032e15d457f67e9f404375dc767ca6bf58907))
- **select:** listen for attribute and text content changes ([9a517e0](https://github.com/baloise/design-system/commit/9a517e0ed6c8bdb05db6dca4fcbcbd55ec4aa7e5))
- **styles:** remove old client lib variables ([9413e38](https://github.com/baloise/design-system/commit/9413e38f5ff44d911eabab7f400f3c838db8d6cb))

### Features

- **components:** update deps ([f650c2b](https://github.com/baloise/design-system/commit/f650c2bf2773a1954dc9f5d99689faac6af0f313))
- **select:** add single value ([b5b536c](https://github.com/baloise/design-system/commit/b5b536ccd62122663b838fa8411a7ca386760922))
- **table:** introduce new table package ([0540144](https://github.com/baloise/design-system/commit/05401440fad284092ecb0220c567ab22eda003b4))
- **table:** update ag-grid usage ([f083875](https://github.com/baloise/design-system/commit/f0838754edc5d8a907b1bec0fdf8b503e16e674d))
- **vue:** rename function validators to rules ([9bad019](https://github.com/baloise/design-system/commit/9bad019a4a02dbf354b799060d454f1729328d45))
- **vue:** update deps ([9323c8d](https://github.com/baloise/design-system/commit/9323c8dd8ecf82126f97d412669756d2c2203b7d))

# [1.9.0](https://github.com/baloise/design-system/compare/v1.8.2...v1.9.0) (2021-08-12)

### Bug Fixes

- **datepicker:** fix fullwidth ([cddd3f2](https://github.com/baloise/design-system/commit/cddd3f2a459e7fb428096bda7b61586a29eda986))
- **input:** fix autofocus and add directives for angular and vue ([ef76dcf](https://github.com/baloise/design-system/commit/ef76dcf9b4ff160b3a38f2148081233407964b53))
- **select:** fix fullwidth ([9cf060a](https://github.com/baloise/design-system/commit/9cf060a6cbf269fa7e03f55d56d87497dcabe126))

### Features

- **testing:** add andable.ts and attachable.ts mixin description ([e918b8a](https://github.com/baloise/design-system/commit/e918b8a2db1e19b7eadd2e42deff697040b83e7d))

## [1.8.2](https://github.com/baloise/design-system/compare/v1.8.1...v1.8.2) (2021-08-06)

### Bug Fixes

- **table:** make styles accessable for angular & vue applications ([f5b5de5](https://github.com/baloise/design-system/commit/f5b5de5b9061bd600bf0ad5b9783b825b7b38c1c))

## 1.8.1 (2021-08-05)

# [1.10.0](https://github.com/baloise/design-system/compare/v1.9.0...v1.10.0) (2021-08-16)

### Bug Fixes

- **datepicker:** fix fullwidth ([cddd3f2](https://github.com/baloise/design-system/commit/cddd3f2a459e7fb428096bda7b61586a29eda986))
- **input:** enable clipboard content ([4d4032e](https://github.com/baloise/design-system/commit/4d4032e15d457f67e9f404375dc767ca6bf58907))
- **input:** fix autofocus and add directives for angular and vue ([ef76dcf](https://github.com/baloise/design-system/commit/ef76dcf9b4ff160b3a38f2148081233407964b53))
- **select:** fix fullwidth ([9cf060a](https://github.com/baloise/design-system/commit/9cf060a6cbf269fa7e03f55d56d87497dcabe126))
- **table:** make styles accessable for angular & vue applications ([f5b5de5](https://github.com/baloise/design-system/commit/f5b5de5b9061bd600bf0ad5b9783b825b7b38c1c))

### Features

- **table:** update ag-grid usage ([f083875](https://github.com/baloise/design-system/commit/f0838754edc5d8a907b1bec0fdf8b503e16e674d))

# [1.9.0](https://github.com/baloise/design-system/compare/v1.8.2...v1.9.0) (2021-08-12)

### Features

- **testing:** add andable.ts and attachable.ts mixin description ([e918b8a](https://github.com/baloise/design-system/commit/e918b8a2db1e19b7eadd2e42deff697040b83e7d))

## [1.8.2](https://github.com/baloise/design-system/compare/v1.8.1...v1.8.2) (2021-08-06)

### Bug Fixes

- **table:** make styles accessable for angular & vue applications ([f5b5de5](https://github.com/baloise/design-system/commit/f5b5de5b9061bd600bf0ad5b9783b825b7b38c1c))

## [1.3.1](https://github.com/baloise/design-system/compare/v1.3.0...v1.3.1) (2021-06-21)

### Bug Fixes

- **radio:** add disabled to radio-group ([5d783b3](https://github.com/baloise/design-system/commit/5d783b3126c1e41b1e12ecf283f6a62ccbc4c51e))

# [1.3.0](https://github.com/baloise/design-system/compare/v1.2.3...v1.3.0) (2021-06-16)

### Features

- **footer:** add new footer component ([2d4cb02](https://github.com/baloise/design-system/commit/2d4cb02391c2fb4ff741cd83852e2a94fea03fdb))
- **hint:** auto detects the placement ([e83fdd3](https://github.com/baloise/design-system/commit/e83fdd3afbdb73ad427c82478fb96fa6faf914e6))
- **slider:** add new form component range slider ([7b89138](https://github.com/baloise/design-system/commit/7b89138bfea2d4f5a763eeb6c36f16fb75394708))

## [1.8.1](https://github.com/baloise/design-system/compare/v1.8.0...v1.8.1) (2021-08-05)

### Bug Fixes

- **data:** add missing disable state for the edit button ([44e2682](https://github.com/baloise/design-system/commit/44e26823ad6d0fb6cf0010e605740698bc60acc5))
- **select:** remove old unused attribute searchInput ([d03c1a8](https://github.com/baloise/design-system/commit/d03c1a85ec7177ea555b09e331ea1d16a99d9765))

# [1.8.0](https://github.com/baloise/design-system/compare/v1.7.1...v1.8.0) (2021-08-02)

### Features

- **heading:** add new space attribute ([f07459d](https://github.com/baloise/design-system/commit/f07459d86c085c99caf6d3d79abb6994d216cef5))

# 1.4.0 (2021-06-23)

**Note:** Version bump only for package root

# [1.7.0](https://github.com/baloise/design-system/compare/v1.6.3...v1.7.0) (2021-07-30)

### Features

- **text:** add new hint color ([3320708](https://github.com/baloise/design-system/commit/3320708723f1e6b733ffbf34e8ebf85cbeb883e9))

## [1.6.3](https://github.com/baloise/design-system/compare/v1.6.2...v1.6.3) (2021-07-30)

### Bug Fixes

- **select:** getValues returns now always an array ([89fd89e](https://github.com/baloise/design-system/commit/89fd89e1f9280ef4450b03e6eed92b5956c1b8d1))
- **validators:** empty values will not get validate unless isRequired is set ([a85a248](https://github.com/baloise/design-system/commit/a85a24882ce7698330e129290d06951c159b9182))
- **vue:** improve rules condition for raised error messages ([cfcfead](https://github.com/baloise/design-system/commit/cfcfead53a88882be3c990adcb47d34f4e178b6f))

## [1.6.2](https://github.com/baloise/design-system/compare/v1.6.1...v1.6.2) (2021-07-29)

### Bug Fixes

- **text:** fix bold style ([5de5051](https://github.com/baloise/design-system/commit/5de5051fde24b378e6edcf6670d33d84fada31a5))

## [1.6.1](https://github.com/baloise/design-system/compare/v1.6.0...v1.6.1) (2021-07-28)

### Bug Fixes

- [#314](https://github.com/baloise/design-system/issues/314), bal-file-upload: clear state of html input file on change to fix the bug, emit change event only if list of files changed - not if rejection happened ([8529906](https://github.com/baloise/design-system/commit/85299063395ae3ddc3237b68839609ee1cff3798))

# [1.6.0](https://github.com/baloise/design-system/compare/v1.5.0...v1.6.0) (2021-07-26)

### Bug Fixes

- change modal background and field height ([eb87f1b](https://github.com/baloise/design-system/commit/eb87f1b639d61028c4712a9229b828358d0896d3))
- **dropdown:** only open menu when there is enough space on top ([6edc40b](https://github.com/baloise/design-system/commit/6edc40bec8a1de460a4b1ef01c45c5d3af397ea8))
- **field:** change min height if label is given or not ([1d1fc2e](https://github.com/baloise/design-system/commit/1d1fc2e6dc849dba0186b7ee2c7342a8e949d22d))

### Features

- **field:** add button addons ([1201eed](https://github.com/baloise/design-system/commit/1201eeda219335db91231b333a52f496b5f1a443))
- **input:** add suffix attribute ([121e585](https://github.com/baloise/design-system/commit/121e585f7ec94b22988fe1c87f85eaf85c21ae15))

# [1.5.0](https://github.com/baloise/design-system/compare/v1.4.1...v1.5.0) (2021-07-22)

### Bug Fixes

- **text:** fix swap slot elements. closes [#303](https://github.com/baloise/design-system/issues/303) ([7cd266b](https://github.com/baloise/design-system/commit/7cd266b4c7c94bf875da03ed492d127e962bc5f3))
- **vue:** change return type of ValidatorFn to string and boolean. closes [#306](https://github.com/baloise/design-system/issues/306) ([52e2b2b](https://github.com/baloise/design-system/commit/52e2b2bcbdf2287b459eaca26d0b92b8d83b9403))

### Features

- **select:** add disabled attribute to the options. closes [#306](https://github.com/baloise/design-system/issues/306) ([c7b38eb](https://github.com/baloise/design-system/commit/c7b38eb06ac8c4d59b4c60651d040189dfee765c))

# [1.4.0](https://github.com/baloise/design-system/compare/v1.3.2...v1.4.0) (2021-06-23)

### Features

- **select:** add prop to turn off the movement ([7c6c495](https://github.com/baloise/design-system/commit/7c6c495424cb37371d4f8ca72a3bc7c00dbce6c8))
- **select:** add prop to turn off the movement ([abe717d](https://github.com/baloise/design-system/commit/abe717d8f1e15074cd44652c5d81617e70a67bcb))

## [1.3.2](https://github.com/baloise/design-system/compare/v1.3.1...v1.3.2) (2021-06-22)

### Bug Fixes

- **radio:** add disabled to radio-group ([5d783b3](https://github.com/baloise/design-system/commit/5d783b3126c1e41b1e12ecf283f6a62ccbc4c51e))

## [1.3.1](https://github.com/baloise/design-system/compare/v1.3.0...v1.3.1) (2021-06-21)

### Bug Fixes

- **slider:** add two-way binding ([a5f948d](https://github.com/baloise/design-system/commit/a5f948d36ba6db75cdc52c4a23de317d1d9ead8d))

# [1.3.0](https://github.com/baloise/design-system/compare/v1.2.3...v1.3.0) (2021-06-16)

### Features

- **footer:** add new footer component ([2d4cb02](https://github.com/baloise/design-system/commit/2d4cb02391c2fb4ff741cd83852e2a94fea03fdb))
- **hint:** auto detects the placement ([e83fdd3](https://github.com/baloise/design-system/commit/e83fdd3afbdb73ad427c82478fb96fa6faf914e6))
- **slider:** add new form component range slider ([7b89138](https://github.com/baloise/design-system/commit/7b89138bfea2d4f5a763eeb6c36f16fb75394708))

## [1.2.1](https://github.com/baloise/design-system/compare/v1.2.0...v1.2.1) (2021-06-09)

### Bug Fixes

- **text:** add bold style ([550d7a2](https://github.com/baloise/design-system/commit/550d7a22a1eb553910ca05a0337488e5fa074c0e))

# [1.2.0](https://github.com/baloise/design-system/compare/v1.1.1...v1.2.0) (2021-06-09)

### Features

- **data:** add edit feature ([d05fdae](https://github.com/baloise/design-system/commit/d05fdae977fe90fe0fbcb1ec1de06d385cf08c75))

## [1.1.1](https://github.com/baloise/design-system/compare/v1.1.0...v1.1.1) (2021-06-03)

### Bug Fixes

- **select:** change empty initial value to empty string ([793c9f4](https://github.com/baloise/design-system/commit/793c9f4fe9a10b964f0d7a2d61cc96219f635a98))

# [1.1.0](https://github.com/baloise/design-system/compare/v1.0.2...v1.1.0) (2021-06-02)

### Bug Fixes

- fix checkbox and radio label handling ([c20eba8](https://github.com/baloise/design-system/commit/c20eba824fa3941d30e61e3214956faac017b227))

### Features

- **table:** add new table component with ag-grid ([6c8d5bf](https://github.com/baloise/design-system/commit/6c8d5bfff372dc320ec58d6231e0dabe0a3e17b9))
- **tabs:** add new style o-steps ([0fb6fe4](https://github.com/baloise/design-system/commit/0fb6fe4e051c1de72257a0146651524a677233a7))

## 1.0.0 (2021-05-18)

### BREAKING CHANGES

- renamed to `Design System`
  - package `@baloise/ui-library` renamed to `@baloise/design-system-components`
  - package `@baloise/ui-library-vue` renamed to `@baloise/design-system-components-vue`
    - `baloiseUiLibrary` renamed to `BaloiseDesignSystem`
  - package `@baloise/ui-library-angular` renamed to `@baloise/design-system-components-angular`
    - `BalUiLibraryModule` renamed to `BaloiseDesignSystemModule`
  - package `@baloise/ui-library-testing` renamed to `@baloise/design-system-testing`
- new font package `@baloise/design-system-fonts`
  - follow the new style [instalation guide](https://design.baloise.dev/components/getting-started/vue/styles.html)
- new icon package `@baloise/design-system-icons`
- removed vue-2 proxy libary
- removed unuesed `bal-teaser-step` component
- dependency updates for all the packages

### Features

- **design:** implement 8pixel spacing
- **bal-heading:** new component with a font cropping fix
- **bal-checkbox:** add new style examples
- **bal-radio:** add new style examples
- **bal-select:** improve focus handling with the keyboard and the cursor

### Bug Fixes

- add design part to the documentation