import { Component } from '@angular/core';
import {ResearchItemsCardComponent} from '../../../shared/components/research-items-card/research-items-card.component';

@Component({
  selector: 'app-research-section',
  standalone: true,
  imports: [
    ResearchItemsCardComponent
  ],
  templateUrl: './research-section.component.html',
  styleUrl: './research-section.component.css'
})
export class ResearchSectionComponent {

}
