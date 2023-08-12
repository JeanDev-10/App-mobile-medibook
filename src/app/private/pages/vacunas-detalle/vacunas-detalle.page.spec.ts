import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacunasDetallePage } from './vacunas-detalle.page';

describe('VacunasDetallePage', () => {
  let component: VacunasDetallePage;
  let fixture: ComponentFixture<VacunasDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacunasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
