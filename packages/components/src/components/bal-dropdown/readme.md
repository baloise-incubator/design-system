### bal-dropdown
 
#### Properties

| Property            | Attribute             | Description                                      | Type      | Default |
| ------------------- | --------------------- | ------------------------------------------------ | --------- | ------- |
| `expanded`          | `expanded`            | If `true` the field spans over the whole width.  | `boolean` | `false` |
| `fixedContentWidth` | `fixed-content-width` | If `true` the dropdown content has a fixed width | `boolean` | `false` |
| `isActive`          | `is-active`           | If `true` the dropdown content is open.          | `boolean` | `false` |


#### Events

| Event         | Description                                                                     | Type                   |
| ------------- | ------------------------------------------------------------------------------- | ---------------------- |
| `balCollapse` | Listen when the dropdown opens or closes. Returns the current `isActive` value. | `CustomEvent<boolean>` |


#### Methods

##### `close() => Promise<void>`

Closes the dropdown menu.

###### Returns

Type: `Promise<void>`



##### `getContentElement() => Promise<HTMLElement | null>`

Returns the `HTMLDivElement` of the content element

###### Returns

Type: `Promise<HTMLElement | null>`



##### `open() => Promise<void>`

Open the dropdown menu.

###### Returns

Type: `Promise<void>`



##### `toggle() => Promise<void>`

Open or closes the dropdown.

###### Returns

Type: `Promise<void>`




 