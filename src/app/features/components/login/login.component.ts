import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {AuthService} from '../../../shared/services/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
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

  login(){
    if(this.user.email == '' || this.user.password==''){
      alert('Please complete your informations')
      return
    }
    this.authService.login(this.user.email, this.user.password)
    this.user.email = ''
    this.user.password = ''
  }

  singInWithGoogle() {
    this.authService.singInWithGoogle()
  }

  singInWithGithub() {
    this.authService.singInWithGithub()
  }
}
