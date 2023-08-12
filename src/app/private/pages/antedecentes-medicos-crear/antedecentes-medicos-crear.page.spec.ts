import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntedecentesMedicosCrearPage } from './antedecentes-medicos-crear.page';

describe('AntedecentesMedicosCrearPage', () => {
  let component: AntedecentesMedicosCrearPage;
  let fixture: ComponentFixture<AntedecentesMedicosCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntedecentesMedicosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
