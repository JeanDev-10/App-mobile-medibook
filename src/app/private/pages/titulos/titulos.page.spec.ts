import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitulosPage } from './titulos.page';

describe('TitulosPage', () => {
  let component: TitulosPage;
  let fixture: ComponentFixture<TitulosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
