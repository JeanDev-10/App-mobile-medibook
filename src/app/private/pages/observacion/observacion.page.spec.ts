import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservacionPage } from './observacion.page';

describe('ObservacionPage', () => {
  let component: ObservacionPage;
  let fixture: ComponentFixture<ObservacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
