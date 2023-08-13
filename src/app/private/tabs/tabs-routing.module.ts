import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../pages/chat/chat.module').then((m) => m.ChatPageModule),
      },
      {
        path: 'dudas',
        loadChildren: () =>
          import('../pages/dudas/dudas.module').then((m) => m.DudasPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'buscar',
        loadChildren: () =>
          import('../pages/buscar/buscar.module').then(
            (m) => m.BuscarPageModule
          ),
      },
      {
        path: 'citas-medicas',
        loadChildren: () =>
          import('../pages/citas-medicas/citas-medicas.module').then(
            (m) => m.CitasMedicasPageModule
          ),
      },
      {
        path: 'citas-medicas-crear',
        loadChildren: () =>
          import(
            '../pages/citas-medicas-crear/citas-medicas-crear.module'
          ).then((m) => m.CitasMedicasCrearPageModule),
      },
      {
        path: 'vacunas',
        loadChildren: () =>
          import('../pages/vacunas/vacunas.module').then(
            (m) => m.VacunasPageModule
          ),
      },
      {
        path: 'cita-medicas-detalle',
        loadChildren: () =>
          import(
            '../pages/cita-medicas-detalle/cita-medicas-detalle.module'
          ).then((m) => m.CitaMedicasDetallePageModule),
      },
      {
        path: 'vacunas-crear',
        loadChildren: () =>
          import('../pages/vacunas-crear/vacunas-crear.module').then(
            (m) => m.VacunasCrearPageModule
          ),
      },
      {
        path: 'vacunas-detalle',
        loadChildren: () =>
          import('../pages/vacunas-detalle/vacunas-detalle.module').then(
            (m) => m.VacunasDetallePageModule
          ),
      },
      {
        path: 'medicamentos',
        loadChildren: () =>
          import('../pages/medicamentos/medicamentos.module').then(
            (m) => m.MedicamentosPageModule
          ),
      },
      {
        path: 'medicamentos-crear',
        loadChildren: () =>
          import('../pages/medicamentos-crear/medicamentos-crear.module').then(
            (m) => m.MedicamentosCrearPageModule
          ),
      },
      {
        path: 'medicamentos-detalle',
        loadChildren: () =>
          import(
            '../pages/medicamentos-detalle/medicamentos-detalle.module'
          ).then((m) => m.MedicamentosDetallePageModule),
      },
      {
        path: 'examenes-medicos',
        loadChildren: () =>
          import('../pages/examenes-medicos/examenes-medicos.module').then(
            (m) => m.ExamenesMedicosPageModule
          ),
      },
      {
        path: 'examenes-medicos-crear',
        loadChildren: () =>
          import(
            '../pages/examenes-medicos-crear/examenes-medicos-crear.module'
          ).then((m) => m.ExamenesMedicosCrearPageModule),
      },
      {
        path: 'examenes-medicos-detalle',
        loadChildren: () =>
          import(
            '../pages/examenes-medicos-detalle/examenes-medicos-detalle.module'
          ).then((m) => m.ExamenesMedicosDetallePageModule),
      },
      {
        path: 'antedecentes-medicos',
        loadChildren: () =>
          import(
            '../pages/antedecentes-medicos/antedecentes-medicos.module'
          ).then((m) => m.AntedecentesMedicosPageModule),
      },
      {
        path: 'antedecentes-medicos-crear',
        loadChildren: () =>
          import(
            '../pages/antedecentes-medicos-crear/antedecentes-medicos-crear.module'
          ).then((m) => m.AntedecentesMedicosCrearPageModule),
      },
      {
        path: 'antedecentes-medicos-detalle',
        loadChildren: () =>
          import(
            '../pages/antedecentes-medicos-detalle/antedecentes-medicos-detalle.module'
          ).then((m) => m.AntedecentesMedicosDetallePageModule),
      },
      {
        path: 'cambiar-password',
        loadChildren: () =>
          import('../pages/cambiar-password/cambiar-password.module').then(
            (m) => m.CambiarPasswordPageModule
          ),
      },
      {
        path: 'profile-medico',
        loadChildren: () =>
          import('../pages/profile-medico/profile-medico.module').then(
            (m) => m.ProfileMedicoPageModule
          ),
      },
      {
        path: 'observacion',
        loadChildren: () =>
          import('../pages/observacion/observacion.module').then(
            (m) => m.ObservacionPageModule
          ),
      },
      {
        path: 'observacion-create',
        loadChildren: () =>
          import('../pages/observacion-crear/observacion-crear.module').then(
            (m) => m.ObservacionCrearPageModule
          ),
      },
      {
        path: 'observacion-detalle',
        loadChildren: () =>
          import(
            '../pages/observacion-detalle/observacion-detalle.module'
          ).then((m) => m.ObservacionDetallePageModule),
      },
      {
        path: 'pagos',
        loadChildren: () =>
          import('../pages/pagos/pagos.module').then((m) => m.PagosPageModule),
      },
      {
        path: 'pagos-crear',
        loadChildren: () =>
          import('../pages/pagos-crear/pagos-crear.module').then(
            (m) => m.PagosCrearPageModule
          ),
      },
      {
        path: 'pagos-detalle',
        loadChildren: () =>
          import('../pages/pagos-detalle/pagos-detalle.module').then(
            (m) => m.PagosDetallePageModule
          ),
      },
      {
        path: 'recetas',
        loadChildren: () =>
          import('../pages/recetas/recetas.module').then(
            (m) => m.RecetasPageModule
          ),
      },
      {
        path: 'recetas-crear',
        loadChildren: () =>
          import('../pages/receta-crear/receta-crear.module').then(
            (m) => m.RecetaCrearPageModule
          ),
      },
      {
        path: 'receta-detalle',
        loadChildren: () =>
          import('../pages/recetas-detalle/recetas-detalle.module').then(
            (m) => m.RecetasDetallePageModule
          ),
      },
      {
        path: 'resenia-crear',
        loadChildren: () =>
          import('../pages/resenia-crear/resenia-crear.module').then(
            (m) => m.ReseniaCrearPageModule
          ),
      },
      {
        path: 'historial-medico',
        loadChildren: () =>
          import('../pages/historial-medico/historial-medico.module').then(
            (m) => m.HistorialMedicoPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
