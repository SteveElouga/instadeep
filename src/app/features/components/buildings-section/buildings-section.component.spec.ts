import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsSectionComponent } from './buildings-section.component';

describe('BuildingsSectionComponent', () => {
  let component: BuildingsSectionComponent;
  let fixture: ComponentFixture<BuildingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
