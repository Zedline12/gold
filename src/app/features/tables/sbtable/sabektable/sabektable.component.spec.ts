import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabektableComponent } from './sabektable.component';

describe('SabektableComponent', () => {
  let component: SabektableComponent;
  let fixture: ComponentFixture<SabektableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabektableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SabektableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
