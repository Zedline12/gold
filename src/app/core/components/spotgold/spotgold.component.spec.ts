import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotgoldComponent } from './spotgold.component';

describe('SpotgoldComponent', () => {
  let component: SpotgoldComponent;
  let fixture: ComponentFixture<SpotgoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpotgoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
