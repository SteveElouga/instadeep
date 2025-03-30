import {Component, Input} from '@angular/core';
import {BuildingsItemsModel} from '../../models/buildings-items.model';

@Component({
  selector: 'app-buildings-card',
  standalone: true,
  imports: [],
  templateUrl: './buildings-card.component.html',
  styleUrl: './buildings-card.component.css'
})
export class BuildingsCardComponent {

  width = '550px'
  @Input()
  buildingItem!: BuildingsItemsModel
}
