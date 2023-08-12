import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitaMedicasDetallePage } from './cita-medicas-detalle.page';

describe('CitaMedicasDetallePage', () => {
  let component: CitaMedicasDetallePage;
  let fixture: ComponentFixture<CitaMedicasDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitaMedicasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
