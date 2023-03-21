# @baloise/design-system-icons

## 12.10.0

## 12.9.0

### Minor Changes

- [#1209](https://github.com/baloise-incubator/design-system/pull/1209) [`bf9ee82f4`](https://github.com/baloise-incubator/design-system/commit/bf9ee82f41db50fd461f8f2819282c96217ba389) Thanks [@hirsch88](https://github.com/hirsch88)! - providing Google Maps styles and markers

  The map markers and styles are provided in a separate package **@baloise/design-system-maps**.

  First install our maps package

  ```
  npm install @baloise/design-system-maps
  npm install @types/googlemaps --save-dev
  ```

  ### Styles

  After installing import the **balMapTypeStyles** into your Google Maps config object.

  ```typescript
  import { balMapTypeStyles } '@baloise/design-system-maps'

  const myMap = new google.maps.map(myMapElement, {
    ...
    styles: balMapTypeStyles
  })
  ```

  ### Markers

  To set a marker import the svg `balMapMarkerDefault` and pass it as the icon url.

  ```typescript
  import { balMapMarkerDefault } '@baloise/design-system-maps'

  new google.maps.Marker({
    position: { lat: 36.6163, lng: -100.61 },
    map,
    icon: {
      url: balMapMarkerDefault,
    },
    title: 'My Marker',
  })
  ```

## 12.8.2

## 12.8.1

### Patch Changes

- [#1182](https://github.com/baloise-incubator/design-system/pull/1182) [`38f0a7fd4`](https://github.com/baloise-incubator/design-system/commit/38f0a7fd492927a49e811e1b0461ed39ebe057d4) Thanks [@hirsch88](https://github.com/hirsch88)! - adjust package.json to npm workspace structure and move contact.js to components dependencies

## 12.8.0

## 12.7.1

## 12.7.0

## 12.6.0

## 12.5.0

## 12.4.1

## 12.4.0

## 12.3.0

### Patch Changes

- [#973](https://github.com/baloise-incubator/design-system/pull/973) [`89f87f6b2`](https://github.com/baloise-incubator/design-system/commit/89f87f6b2e2030558b284d94ced1f1d4d602becc) Thanks [@hirsch88](https://github.com/hirsch88)! - remove inline styles of the location icon

## 12.2.0

### Patch Changes

- [#1006](https://github.com/baloise-incubator/design-system/pull/1006) [`424f8dbb7`](https://github.com/baloise-incubator/design-system/commit/424f8dbb73be578684e085d35bec4c7774bb8dba) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - adjust check-circle icon

## Previous Versions

- [Older versions](https://github.com/baloise-incubator/design-system/blob/next/CHANGELOG_v12.md)
- [Rebranding versions](https://github.com/baloise-incubator/design-system/blob/next/CHANGELOG_NEXT.md)
