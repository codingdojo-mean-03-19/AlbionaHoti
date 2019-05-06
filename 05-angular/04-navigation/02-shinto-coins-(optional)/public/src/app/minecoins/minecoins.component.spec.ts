import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecoinsComponent } from './minecoins.component';

describe('MinecoinsComponent', () => {
  let component: MinecoinsComponent;
  let fixture: ComponentFixture<MinecoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
