import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutovehiculeComponent } from './autovehicule.component';

describe('AutovehiculeComponent', () => {
  let component: AutovehiculeComponent;
  let fixture: ComponentFixture<AutovehiculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutovehiculeComponent]
    });
    fixture = TestBed.createComponent(AutovehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
