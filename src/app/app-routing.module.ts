import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './core/shared/guards/permission.guard';
import { AuthGuard } from './core/shared/guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      loadChildren: () =>
        import('./public/public.module').then((m) => m.PublicModule),
       /* canActivate: [PermissionGuard], */
    },

    //Rutas Privadas

    {
      path: '',
      loadChildren: () =>
        import('./private/private.module').then((m) => m.PrivateModule),
       /* canActivate: [AuthGuard],  */ /// Utiliza el guardia para proteger la ruta */
    },

    //Error 404
    { path: '**', redirectTo: '/', pathMatch: 'full' },
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
