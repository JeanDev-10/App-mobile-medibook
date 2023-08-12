import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacunasCrearPage } from './vacunas-crear.page';

describe('VacunasCrearPage', () => {
  let component: VacunasCrearPage;
  let fixture: ComponentFixture<VacunasCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacunasCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
