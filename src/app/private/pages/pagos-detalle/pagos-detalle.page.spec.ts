import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagosDetallePage } from './pagos-detalle.page';

describe('PagosDetallePage', () => {
  let component: PagosDetallePage;
  let fixture: ComponentFixture<PagosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
