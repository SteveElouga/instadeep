import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA, ElementRef,
  HostListener,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {UpdatesModel} from '../../models/updates.model';
import {CommonModule} from '@angular/common';
import {TruncatePipe} from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-blogs-card',
  standalone: true,
  imports: [
    CommonModule,
    TruncatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blogs-card.component.html',
  styleUrl: './blogs-card.component.scss',
})
export class BlogsCardComponent implements OnInit {

  @Input()
  blogs: UpdatesModel[] = []

  currentIndex = 0;
  displayedItems: any[] = []; // Tableau pour les éléments affichés

  constructor(@Inject(LOCALE_ID) public locale: string, private  renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.updateDisplayedItems(); // Initialiser les éléments affichés
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = "js/scripts-swiper.js"; // URL du script externe
    script.onload = () => {
      console.log('Script chargé avec succès !');
    };
    document.body.appendChild(script);

  }


  get currentItems() {
    return this.displayedItems;
  }

  slideLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.blogs.length) % this.blogs.length;
    this.updateDisplayedItems();
  }

  slideRight() {
    this.currentIndex = (this.currentIndex + 1) % this.blogs.length;
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    this.displayedItems = [];
    for (let i = -1; i < 2; i++) {
      const index = (this.currentIndex + i + this.blogs.length) % this.blogs.length;
      this.displayedItems.push(this.blogs[index]);
    }
  }


}
