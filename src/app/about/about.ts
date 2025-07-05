import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  templateUrl: './about.html',
  styles:[`
    .profile {
      height:400px;
      width: 400px;
      background-image: url("/assets/profile.jpg");
      background-repeat: no-repeat;
      background-size:contain;
      background-position:center;
      margin: auto;
      margin-top: 50px;
    }
  `],
  styleUrls: [
  ]
})
export class AboutComponent {

}
