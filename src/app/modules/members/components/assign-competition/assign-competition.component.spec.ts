import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCompetitionComponent } from './assign-competition.component';

describe('AssignCompetitionComponent', () => {
  let component: AssignCompetitionComponent;
  let fixture: ComponentFixture<AssignCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignCompetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
