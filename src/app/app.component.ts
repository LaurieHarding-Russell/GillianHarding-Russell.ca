import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, MenuComponent],
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        "/src/styles.css"
    ]
})
export class AppComponent {
  title = 'Gillian Harding-Russell';

  constructor(private element: ElementRef) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {
    this.element.nativeElement.style.setProperty('--scroll', `${window.scrollY}px`);

    // FIXME, I've got to think where to put this menu logic.
    if (window.scrollY > 40) {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', `#dddddd`);
    } else {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', `#dddddd66`);
    }
  };
}