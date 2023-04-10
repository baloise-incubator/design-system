## Testing
 
The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overridden to work with our components.
 
- [More information about the installation and usage](?path=/docs/development-testing--page)
 
<!-- START: human documentation -->
 
 
 
 
 
 

```typescript
import { byTestId } from '@baloise/design-system-testing'

describe('Input Slider', () => {
  const slider = byTestId('my-slider') // [data-testid="my-slider"]
  it('should ...', () => {
    cy.get(slider).type('30').should('have.value', '30')
  })
})
```

 
 
 
 
 
 
 
<!-- END: human documentation -->
 