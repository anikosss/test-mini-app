import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userId: number = 100;
  username: string = '';

  constructor(private loginService: LoginService) {}

  login() {
    // Make a POST request to the login endpoint
    let loginResponse = this.loginService.login(this.userId, this.username);
    loginResponse.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}
