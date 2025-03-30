import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchItemsCardComponent } from './research-items-card.component';

describe('ResearchItemsCardComponent', () => {
  let component: ResearchItemsCardComponent;
  let fixture: ComponentFixture<ResearchItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchItemsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
