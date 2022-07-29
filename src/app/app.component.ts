import { Component } from '@angular/core';
import { AuthService } from './Services/AuthService/auth.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public val = 3;
  constructor(private service: AuthService) {
    this.service.googleAuthSDK();
  }
}
