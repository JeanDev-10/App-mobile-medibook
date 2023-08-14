import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitulosCrearPage } from './titulos-crear.page';

describe('TitulosCrearPage', () => {
  let component: TitulosCrearPage;
  let fixture: ComponentFixture<TitulosCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitulosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
