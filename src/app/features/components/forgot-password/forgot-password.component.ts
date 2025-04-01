import { Component } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email = ''
  constructor(private authService: AuthService) {
  }

  forgotPassword(){
    this.authService.forgotPassword(this.email)
    this.email = ''
  }
}
