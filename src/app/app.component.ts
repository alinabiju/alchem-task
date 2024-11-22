import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectlistComponent } from './components/objectlist/objectlist.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObjectlistComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-objectlist />
    </main>
  `,
  styles: [
    `
    main{
      padding:16px;
    }`
  ],
})
export class AppComponent {
  title = 'Library Manager';
}
