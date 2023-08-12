import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamenesMedicosPage } from './examenes-medicos.page';

describe('ExamenesMedicosPage', () => {
  let component: ExamenesMedicosPage;
  let fixture: ComponentFixture<ExamenesMedicosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExamenesMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
