import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileMedicoPage } from './profile-medico.page';

describe('ProfileMedicoPage', () => {
  let component: ProfileMedicoPage;
  let fixture: ComponentFixture<ProfileMedicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
