import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishsComponent } from './fishs.component';

describe('FishsComponent', () => {
  let component: FishsComponent;
  let fixture: ComponentFixture<FishsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FishsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FishsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
