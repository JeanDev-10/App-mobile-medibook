import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReseniaCrearPage } from './resenia-crear.page';

describe('ReseniaCrearPage', () => {
  let component: ReseniaCrearPage;
  let fixture: ComponentFixture<ReseniaCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReseniaCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
