## Testing
 
The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overridden to work with our components.
 
- [More information about the installation and usage](?path=/docs/development-testing--page)
 
<!-- START: human documentation -->
 
```typescript
import { byTestId } from '@baloise/design-system-testing'

describe('Snackbar', () => {
  it('should ...', () => {
    cy.balSnackbarFind().first().contains('Hi I am a default Snack!')
  })
})
```
 
<!-- END: human documentation -->
 
### Component Commands
 
A list of the custom commands for this specific component.
 
| Command           | Description                    | Signature                                          |
| ----------------- | ------------------------------ | -------------------------------------------------- |
| `balSnackbarFind` | Returns the visible snackbars. | `(options?: Partial<Loggable>): Chainable<JQuery>` |
 
 
### Component Element Selectors

| Selector         | Element                   |
| ---------------- | ------------------------- |
| snackbar.main    | Snackbar element.         |
| snackbar.heading | Snackbar heading element. |
| snackbar.label   | Snackbar label element.   |
| snackbar.close   | Snackbar close element.   |
| snackbar.action  | Snackbar action element.  |

