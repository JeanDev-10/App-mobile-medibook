import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaCrearPage } from './receta-crear.page';

describe('RecetaCrearPage', () => {
  let component: RecetaCrearPage;
  let fixture: ComponentFixture<RecetaCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
