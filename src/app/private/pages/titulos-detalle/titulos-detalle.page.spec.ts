import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitulosDetallePage } from './titulos-detalle.page';

describe('TitulosDetallePage', () => {
  let component: TitulosDetallePage;
  let fixture: ComponentFixture<TitulosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitulosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
