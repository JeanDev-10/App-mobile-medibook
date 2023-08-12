import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamenesMedicosCrearPage } from './examenes-medicos-crear.page';

describe('ExamenesMedicosCrearPage', () => {
  let component: ExamenesMedicosCrearPage;
  let fixture: ComponentFixture<ExamenesMedicosCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExamenesMedicosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
