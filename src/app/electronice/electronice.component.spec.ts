import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroniceComponent } from './electronice.component';

describe('ElectroniceComponent', () => {
  let component: ElectroniceComponent;
  let fixture: ComponentFixture<ElectroniceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectroniceComponent]
    });
    fixture = TestBed.createComponent(ElectroniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
