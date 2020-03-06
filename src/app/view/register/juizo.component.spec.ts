import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuizoComponent } from './juizo.component';

describe('JuizoComponent', () => {
  let component: JuizoComponent;
  let fixture: ComponentFixture<JuizoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuizoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
