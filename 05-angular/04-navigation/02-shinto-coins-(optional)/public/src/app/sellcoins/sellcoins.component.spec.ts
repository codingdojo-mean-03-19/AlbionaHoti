import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcoinsComponent } from './sellcoins.component';

describe('SellcoinsComponent', () => {
  let component: SellcoinsComponent;
  let fixture: ComponentFixture<SellcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellcoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
