import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntedecentesMedicosPage } from './antedecentes-medicos.page';

describe('AntedecentesMedicosPage', () => {
  let component: AntedecentesMedicosPage;
  let fixture: ComponentFixture<AntedecentesMedicosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntedecentesMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
