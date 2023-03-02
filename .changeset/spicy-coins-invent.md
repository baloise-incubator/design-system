---
'@baloise/design-system-components': minor
---

We introduced a new way of adding a options to the bal-radio-group and bal-checkbox-group by introducing the `options` property in which options can be passed using a Javascript.

**bal-radio-group**

```html
<bal-radio-group interface="radio" [options]="options"></bal-radio-group>
```

```typescript
import { newBalRadioOption } from "@baloise/design-system-components";

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
})
export class ExampleComponent {
  options = [ newBalRadioOption({ name:"radio-example", label:"Label 1",  value:"1" }), newBalRadioOption({ name:"radio-example", label:"Label 2",  value:"2" }) ]
}
```

**bal-checkbox-group**

```html
<bal-checkbox-group interface="checkbox" [options]="options"></bal-checkbox-group>
```

```typescript
import { newBalCheckboxOption } from "@baloise/design-system-components";

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
})
export class ExampleComponent {
  options = [ newBalCheckboxOption({ name:"checkbox-example", label:"Label 1",  value:"1" }), newBalCheckboxOption({ name:"checkbox-example", label:"Label 2",  value:"2" }) ]
}
```