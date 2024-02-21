import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbaektableComponent } from './sbaektable.component';

describe('SbaektableComponent', () => {
  let component: SbaektableComponent;
  let fixture: ComponentFixture<SbaektableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SbaektableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SbaektableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
