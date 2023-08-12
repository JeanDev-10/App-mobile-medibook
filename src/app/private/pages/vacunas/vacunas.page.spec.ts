import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacunasPage } from './vacunas.page';

describe('VacunasPage', () => {
  let component: VacunasPage;
  let fixture: ComponentFixture<VacunasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
