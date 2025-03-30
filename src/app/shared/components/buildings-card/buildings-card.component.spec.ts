import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsCardComponent } from './buildings-card.component';

describe('BuildingsCardComponent', () => {
  let component: BuildingsCardComponent;
  let fixture: ComponentFixture<BuildingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
