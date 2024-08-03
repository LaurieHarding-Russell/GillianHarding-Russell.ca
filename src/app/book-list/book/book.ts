import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrls: [
    "book.css",
    "/src/styles.css"
  ]
})
export class BookComponent {
  @Input() image = "";
  @Input() imageFallback = "";
  @Input() credit = "";
  @Input() id = "";
  @Input() publish = "";
  @Input() description = "";
  @Input() title = "";
  show = false;
}