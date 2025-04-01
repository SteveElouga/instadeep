import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }

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
