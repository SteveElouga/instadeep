import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css'
})
export class UsersManagementComponent {
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
