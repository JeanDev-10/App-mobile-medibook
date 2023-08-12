import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasMedicasCrearPage } from './citas-medicas-crear.page';

describe('CitasMedicasCrearPage', () => {
  let component: CitasMedicasCrearPage;
  let fixture: ComponentFixture<CitasMedicasCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitasMedicasCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
