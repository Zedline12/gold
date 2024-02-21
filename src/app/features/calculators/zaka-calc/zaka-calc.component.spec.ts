import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakaCalcComponent } from './zaka-calc.component';

describe('ZakaCalcComponent', () => {
  let component: ZakaCalcComponent;
  let fixture: ComponentFixture<ZakaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZakaCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZakaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
