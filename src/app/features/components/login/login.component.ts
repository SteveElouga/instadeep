import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  user = {
    email: '',
    password: ''
  }
  isVisible!: boolean;

  showPassword(){
    this.isVisible = true
  }

  hidePassword(){
    this.isVisible = false
  }
}
