import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressSectionComponent } from './press-section.component';

describe('PressSectionComponent', () => {
  let component: PressSectionComponent;
  let fixture: ComponentFixture<PressSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
