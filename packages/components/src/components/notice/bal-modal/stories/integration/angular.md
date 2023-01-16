## Integration

For the angular framework we provide a `ModalService` to create more easily and dynamic.

Create a html and a typescript file for your modal component like this.

**modal.component.html**

```html
<bal-modal-header>Modal Title</bal-modal-header>
<bal-modal-body>
  <p>{{ firstName }}</p>
  <p>{{ lastName }}</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </p>
  <bal-button-group position="right" class="mt-medium">
    <bal-button color="link" (click)="closeModal()">Cancel</bal-button>
    <bal-button color="primary" (click)="closeModal()">Okay</bal-button>
  </bal-button-group>
</bal-modal-body>
```

With the help of the `BalModalService` we are able to close the modal.

**modal.component.ts**

```typescript
import { Component, Input } from '@angular/core'
import { BalModalService } from '@baloise/design-system-components-angular'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  // Data passed in by componentProps
  @Input() firstName!: string
  @Input() lastName!: string

  constructor(private modalService: BalModalService) {}

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalService.dismiss({
      dismissed: true,
    })
  }
}
```

From the main component we can easily create a modal with the `BalModalService`.

**app.component.ts**

```typescript
import { Component } from '@angular/core'
import { BalModalService } from '@baloise/design-system-components-angular'
import { ModalComponent } from './modal.component'

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
})
export class ModalPageComponent {
  modal!: HTMLBalModalElement

  constructor(private modalService: BalModalService) {}

  async openModal() {
    this.modal = await this.modalService.create({
      component: ModalComponent,
      componentProps: {
        firstName: 'Peter',
        lastName: 'Parker',
      },
    })
    await this.modal.present()

    // Collect the data from the modal through the dismiss event
    const { data } = await this.modal.onWillDismiss()

    // React onDidDismiss
    await this.modal.onDidDismiss()
    someFunctionToDoOnDidDismissAction()
  }

  closeModal() {
    this.modal.dismiss()
  }
}
```
