import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioReservasComponent } from '../relatorio-reservas.component';

describe('RelatorioReservasComponent', () => {
  let component: RelatorioReservasComponent;
  let fixture: ComponentFixture<RelatorioReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
