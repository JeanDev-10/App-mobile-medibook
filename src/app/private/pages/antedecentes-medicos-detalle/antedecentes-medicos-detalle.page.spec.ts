import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntedecentesMedicosDetallePage } from './antedecentes-medicos-detalle.page';

describe('AntedecentesMedicosDetallePage', () => {
  let component: AntedecentesMedicosDetallePage;
  let fixture: ComponentFixture<AntedecentesMedicosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntedecentesMedicosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
