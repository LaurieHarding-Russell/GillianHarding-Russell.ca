import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'top-menu',
    imports: [RouterModule],
    template: `
    <nav class="menu">
      <a routerLink="/">General</a>
      <a routerLink="/books">Books</a>
      <a routerLink="/about">About</a>
      <a routerLink="/awards">Literary Awards</a>
    </nav>
  `,
    styleUrls: [
        "menu.css"
    ]
})
export class MenuComponent {
    
}
