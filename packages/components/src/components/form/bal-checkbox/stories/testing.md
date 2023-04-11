## Testing

The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overridden to work with our components.

- [More information about the installation and usage](?path=/docs/development-testing--page)

<!-- START: human documentation -->

```typescript
import { byTestId } from '@baloise/design-system-testing'

describe('Checkbox', () => {
  const checkbox = byTestId('my-checkbox') // [data-testid="my-checkbox"]
  it('should ...', () => {
    cy.get(checkbox).contains('Label').check().should('be.checked').should('not.be.disabled')
  })
})
```

<!-- END: human documentation -->

### Custom Selectors

| Selector       | Element               |
| -------------- | --------------------- |
| checkbox.input | Native input element. |
| checkbox.label | Label element.        |
| checkbox.text  | Label span element.   |
