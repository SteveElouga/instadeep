import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSectionComponent } from './research-section.component';

describe('ResearchSectionComponent', () => {
  let component: ResearchSectionComponent;
  let fixture: ComponentFixture<ResearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
