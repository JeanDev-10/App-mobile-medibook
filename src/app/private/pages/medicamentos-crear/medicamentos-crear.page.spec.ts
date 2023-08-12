import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicamentosCrearPage } from './medicamentos-crear.page';

describe('MedicamentosCrearPage', () => {
  let component: MedicamentosCrearPage;
  let fixture: ComponentFixture<MedicamentosCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicamentosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
