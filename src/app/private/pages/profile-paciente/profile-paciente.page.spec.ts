import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePacientePage } from './profile-paciente.page';

describe('ProfilePacientePage', () => {
  let component: ProfilePacientePage;
  let fixture: ComponentFixture<ProfilePacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
