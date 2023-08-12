import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamenesMedicosDetallePage } from './examenes-medicos-detalle.page';

describe('ExamenesMedicosDetallePage', () => {
  let component: ExamenesMedicosDetallePage;
  let fixture: ComponentFixture<ExamenesMedicosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExamenesMedicosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
