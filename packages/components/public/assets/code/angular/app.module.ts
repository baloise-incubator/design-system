import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { BalCoreModule } from '@baloise/design-system-components-angular'

import { AppComponent } from './app.component'
import { ExampleComponent } from './example.component'

@NgModule({
  imports: [BrowserModule, FormsModule, BalCoreModule.forRoot(), ExampleComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
