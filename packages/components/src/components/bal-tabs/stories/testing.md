## Testing

The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overriden to work with our components.

- [More information about the installation and usage](/components/tooling/testing.html)

<!-- START: human documentation -->

```typescript
import { dataTestSelector } from '@baloise/design-system-testing'

describe('Tabs', () => {
  const tabs = dataTestSelector('my-tabs') // [data-test-id="my-tabs"]
  const steps = dataTestSelector('my-steps') // [data-test-id="my-steps"]
  it('should ...', () => {
    cy.get(tabs).select('Tab B').should('have.value', 'Tab B')
    cy.get(tabs).balTabsFindActionButton().contains('Action')
    cy.get(steps).balTabsFindItems().first().balTabItemShouldHaveState('done')
  })
})
```

<!-- END: human documentation -->

### Custom Commands

A list of the custom commands for this specific component.

| Command                     | Description                                   | Signature                                                                  |
| --------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| `balTabsFindActionButton`   | Returns the action button element.            | `(): Chainable<JQuery>`                                                    |
| `balTabsFindItems`          | Returns the tab items.                        | `(): Chainable<JQuery>`                                                    |
| `balTabsShouldHaveItems`    | Assert that the tab has the given item.       | `(labels: string[], dataType?: 'label' \| 'value'): Chainable<JQuery>`     |
| `balTabItemShouldHaveState` | Assert that the tab item has the given state. | `(state: 'done' \| 'failed' \| 'active' \| 'disabled'): Chainable<JQuery>` |
