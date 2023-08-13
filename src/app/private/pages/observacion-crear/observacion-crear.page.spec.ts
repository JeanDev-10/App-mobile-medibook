import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservacionCrearPage } from './observacion-crear.page';

describe('ObservacionCrearPage', () => {
  let component: ObservacionCrearPage;
  let fixture: ComponentFixture<ObservacionCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservacionCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
