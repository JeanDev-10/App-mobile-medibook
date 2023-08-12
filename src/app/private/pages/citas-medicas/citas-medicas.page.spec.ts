import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasMedicasPage } from './citas-medicas.page';

describe('CitasMedicasPage', () => {
  let component: CitasMedicasPage;
  let fixture: ComponentFixture<CitasMedicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitasMedicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
