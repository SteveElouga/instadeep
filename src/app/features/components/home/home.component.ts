import {Component} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {FooterComponent} from '../../../shared/components/footer/footer.component';
import {BlogSectionComponent} from '../blog-section/blog-section.component';
import {ResearchSectionComponent} from '../research-section/research-section.component';
import {PressSectionComponent} from '../press-section/press-section.component';
import {PartnerSectionComponent} from '../partner-section/partner-section.component';
import {BuildingsSectionComponent} from '../buildings-section/buildings-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BlogSectionComponent,
    ResearchSectionComponent,
    PressSectionComponent,
    PartnerSectionComponent,
    BuildingsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.components.scss'
})
export class HomeComponent {

}
