import {Component, OnInit, Signal, signal} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {User} from '@angular/fire/auth'
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent{

  user: Signal<User | null | undefined> = signal(null)

  constructor(private authService: AuthService) {
    this.user = toSignal(this.authService.currentUser$)
  }


  logout(){
    this.authService.logout()
  }
}
