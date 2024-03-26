import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinComponent } from './magazin.component';

describe('MagazinComponent', () => {
  let component: MagazinComponent;
  let fixture: ComponentFixture<MagazinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagazinComponent]
    });
    fixture = TestBed.createComponent(MagazinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
