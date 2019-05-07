import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlistComponent } from './prolist.component';

describe('ProlistComponent', () => {
  let component: ProlistComponent;
  let fixture: ComponentFixture<ProlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
