import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'citas-medicas',
    loadChildren: () => import('./pages/citas-medicas/citas-medicas.module').then( m => m.CitasMedicasPageModule)
  },
  {
    path: 'citas-medicas-crear',
    loadChildren: () => import('./pages/citas-medicas-crear/citas-medicas-crear.module').then( m => m.CitasMedicasCrearPageModule)
  },
  {
    path: 'vacunas',
    loadChildren: () => import('./pages/vacunas/vacunas.module').then( m => m.VacunasPageModule)
  },
  {
    path: 'cita-medicas-detalle',
    loadChildren: () => import('./pages/cita-medicas-detalle/cita-medicas-detalle.module').then( m => m.CitaMedicasDetallePageModule)
  },
  {
    path: 'vacunas-crear',
    loadChildren: () => import('./pages/vacunas-crear/vacunas-crear.module').then( m => m.VacunasCrearPageModule)
  },
  {
    path: 'vacunas-detalle',
    loadChildren: () => import('./pages/vacunas-detalle/vacunas-detalle.module').then( m => m.VacunasDetallePageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./pages/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'medicamentos-crear',
    loadChildren: () => import('./pages/medicamentos-crear/medicamentos-crear.module').then( m => m.MedicamentosCrearPageModule)
  },
  {
    path: 'medicamentos-detalle',
    loadChildren: () => import('./pages/medicamentos-detalle/medicamentos-detalle.module').then( m => m.MedicamentosDetallePageModule)
  },
  {
    path: 'examenes-medicos',
    loadChildren: () => import('./pages/examenes-medicos/examenes-medicos.module').then( m => m.ExamenesMedicosPageModule)
  },
  {
    path: 'examenes-medicos-crear',
    loadChildren: () => import('./pages/examenes-medicos-crear/examenes-medicos-crear.module').then( m => m.ExamenesMedicosCrearPageModule)
  },
  {
    path: 'examenes-medicos-detalle',
    loadChildren: () => import('./pages/examenes-medicos-detalle/examenes-medicos-detalle.module').then( m => m.ExamenesMedicosDetallePageModule)
  },
  {
    path: 'antedecentes-medicos',
    loadChildren: () => import('./pages/antedecentes-medicos/antedecentes-medicos.module').then( m => m.AntedecentesMedicosPageModule)
  },
  {
    path: 'antedecentes-medicos-crear',
    loadChildren: () => import('./pages/antedecentes-medicos-crear/antedecentes-medicos-crear.module').then( m => m.AntedecentesMedicosCrearPageModule)
  },
  {
    path: 'antedecentes-medicos-detalle',
    loadChildren: () => import('./pages/antedecentes-medicos-detalle/antedecentes-medicos-detalle.module').then( m => m.AntedecentesMedicosDetallePageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./pages/cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
  {
    path: 'profile-medico',
    loadChildren: () => import('./pages/profile-medico/profile-medico.module').then( m => m.ProfileMedicoPageModule)
  },
  {
    path: 'profile-paciente',
    loadChildren: () => import('./pages/profile-paciente/profile-paciente.module').then( m => m.ProfilePacientePageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
