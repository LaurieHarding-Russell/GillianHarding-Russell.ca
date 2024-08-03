import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="menu">
      <a routerLink="/">General</a>
      <a routerLink="/books">Books</a>
      <a routerLink="/about">About</a>
      <a routerLink="/awards">Literary Awards</a>
    </div>
  `,
  styleUrls: [
    "menu.css",
    "/src/styles.css"
  ]
})
export class MenuComponent {
    
}
