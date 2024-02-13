import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaratComponent } from './karat.component';

describe('KaratComponent', () => {
  let component: KaratComponent;
  let fixture: ComponentFixture<KaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KaratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
