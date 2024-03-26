import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanzariComponent } from './vanzari.component';

describe('VanzariComponent', () => {
  let component: VanzariComponent;
  let fixture: ComponentFixture<VanzariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VanzariComponent]
    });
    fixture = TestBed.createComponent(VanzariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
