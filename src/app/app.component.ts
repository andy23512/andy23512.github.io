import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public icons = {
    faEnvelope,
    faFacebook,
    faLinkedinIn,
    faGithub,
    faCodepen,
  };
}
