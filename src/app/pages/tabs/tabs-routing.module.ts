import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'character',
        loadChildren: () =>
          import('../character/character.module').then(
            (m) => m.CharacterModule
          ),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('../staff/staff.module').then((m) => m.StaffModule),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('../students/students.module').then((m) => m.StudentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
