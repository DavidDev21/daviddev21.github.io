import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDetailComponent } from './experiences-detail.component';

describe('ExperiencesDetailComponent', () => {
  let component: ExperiencesDetailComponent;
  let fixture: ComponentFixture<ExperiencesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
