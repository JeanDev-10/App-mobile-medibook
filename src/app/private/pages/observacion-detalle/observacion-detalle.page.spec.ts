import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservacionDetallePage } from './observacion-detalle.page';

describe('ObservacionDetallePage', () => {
  let component: ObservacionDetallePage;
  let fixture: ComponentFixture<ObservacionDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservacionDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
