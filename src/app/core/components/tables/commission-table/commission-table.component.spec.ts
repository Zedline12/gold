import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionTableComponent } from './commission-table.component';

describe('CommissionTableComponent', () => {
  let component: CommissionTableComponent;
  let fixture: ComponentFixture<CommissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommissionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
