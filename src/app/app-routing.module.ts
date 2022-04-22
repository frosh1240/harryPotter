import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { TabsComponent } from './pages/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsModule),
  },
  {
    path: '',
    redirectTo: 'tabs',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
