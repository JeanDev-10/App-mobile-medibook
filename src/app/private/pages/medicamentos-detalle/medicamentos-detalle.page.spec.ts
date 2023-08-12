import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicamentosDetallePage } from './medicamentos-detalle.page';

describe('MedicamentosDetallePage', () => {
  let component: MedicamentosDetallePage;
  let fixture: ComponentFixture<MedicamentosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicamentosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
