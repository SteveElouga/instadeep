import {AfterViewInit, Component, signal} from '@angular/core';
import {BLOGS} from '../../../shared/data/updates-items';
import {BlogsCardComponent} from '../../../shared/components/blogs-card/blogs-card.component';
import AOS from 'aos';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [
    BlogsCardComponent
  ],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.css'
})
export class BlogSectionComponent implements AfterViewInit {
  blogs = signal(BLOGS)

  ngAfterViewInit() {
    AOS.init()
  }
}
