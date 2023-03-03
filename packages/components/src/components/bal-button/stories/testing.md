## Testing

The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overridden to work with our components.

- [More information about the installation and usage](?path=/docs/development-testing--page)

<!-- START: human documentation -->

```typescript
import { byTestId } from '@baloise/design-system-nest-testing'

describe('Button', () => {
  const button = byTestId('my-button') // [data-testid="my-button"]
  it('should ...', () => {
    cy.get(button).contains('Label').click().should('not.be.disabled')
  })
})
```

<!-- END: human documentation -->
