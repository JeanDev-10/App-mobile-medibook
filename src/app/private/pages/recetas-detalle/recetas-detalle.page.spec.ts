import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasDetallePage } from './recetas-detalle.page';

describe('RecetasDetallePage', () => {
  let component: RecetasDetallePage;
  let fixture: ComponentFixture<RecetasDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
