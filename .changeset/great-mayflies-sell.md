---
'@baloise/design-system-components': minor
---

improve accordion structure to a more flexible solution.

**old**

The old button accordion solution is still active.

```html
<bal-accordion>
  <p class="py-medium">Hidden content</p>
</bal-accordion>
```

**new**

In the new structure the header of the accordion can be designed as the situation demands it.

```html
<bal-accordion>
  <bal-accordion-details>
    <p class="py-medium">Hidden content</p>
  </bal-accordion-details>
  <bal-accordion-summary>
    My custom header
    <bal-accordion-trigger></bal-accordion-trigger>
  </bal-accordion-summary>
</bal-accordion>
```
