import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCardComponent } from './blogs-card.component';

describe('UpdatesCardComponent', () => {
  let component: BlogsCardComponent;
  let fixture: ComponentFixture<BlogsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
