import {Component, signal} from '@angular/core';
import {BuildingsCardComponent} from '../../../shared/components/buildings-card/buildings-card.component';
import {BUILDINGSITEMS} from '../../../shared/data/buildings-items';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-buildings-section',
  standalone: true,
  imports: [
    BuildingsCardComponent,
    NgClass,
  ],
  templateUrl: './buildings-section.component.html',
  styleUrl: './buildings-section.component.scss'
})
export class BuildingsSectionComponent {
  buildingItems = signal(BUILDINGSITEMS)

  getBuildingClass(building: any): string {
    return `building-${building.id}`;
  }
}
