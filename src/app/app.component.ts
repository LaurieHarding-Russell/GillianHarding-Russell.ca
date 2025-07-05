
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuComponent],
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
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

    if (window.scrollY < 200) {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', window.scrollY/200 * 0.5 + 0.5);
    } else {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', 1);
    }
  };
}