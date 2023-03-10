import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'Acceil',
    component: TasksComponent,
  },

  {
    path: '',
    redirectTo: '/Acceil',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
