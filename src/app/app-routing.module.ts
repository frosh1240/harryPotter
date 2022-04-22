import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsModule),
  },
  {
    path: '',
    redirectTo: 'tabs/students',
    pathMatch: 'full',
  },
  {
    path: 'character',
    loadChildren: () =>
      import('../app/pages/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./pages/staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/students/add/add.module').then((m) => m.AddModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
