import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'Acceil',
    component: TasksComponent,
    children: [
      {
        path: 'add-task',
        component: AddTaskComponent,
      },
    ],
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
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
