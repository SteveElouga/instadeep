import { Component } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user = {
    email: '',
    password: ''
  }
  isVisible!: boolean;

  constructor(private authService: AuthService) {
  }

  showPassword(){
    this.isVisible = true
  }

  hidePassword(){
    this.isVisible = false
  }
  register(){
    if(this.user.email == ''){
      alert('Please enter your email')
      return
    }
    if(this.user.password == ''){
      alert('Please enter your password')
      return
    }
    this.authService.register(this.user.email, this.user.password)
    this.user.email = ''
    this.user.password = ''
  }
}
