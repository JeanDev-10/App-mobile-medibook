import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
