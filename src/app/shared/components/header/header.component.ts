import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu_open = false
  showProduct = false

  menu() {
    this.menu_open = !this.menu_open
  }

  productShow() {
    this.showProduct = true
  }

  productHidden() {
    this.showProduct = false
  }
}
