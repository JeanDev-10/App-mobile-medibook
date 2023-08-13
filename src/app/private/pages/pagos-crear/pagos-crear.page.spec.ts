import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagosCrearPage } from './pagos-crear.page';

describe('PagosCrearPage', () => {
  let component: PagosCrearPage;
  let fixture: ComponentFixture<PagosCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
