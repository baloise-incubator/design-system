## Testing

The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overriden to work with our components.

- [More information about the installation and usage](/components/tooling/testing.html)

<!-- START: human documentation -->

```typescript
import { dataTestSelector } from '@baloise/design-system-testing'

describe('Toast', () => {
  it('should ...', () => {
    cy.balToastFind().first().contains('Hi I am a default Toast! Hi I am a default Toast!')
  })
})
```

<!-- END: human documentation -->

### Custom Commands

A list of the custom commands for this specific component.

| Command        | Description                 | Signature               |
| -------------- | --------------------------- | ----------------------- |
| `balToastFind` | Returns the visible toasts. | `(): Chainable<JQuery>` |
