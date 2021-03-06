import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//
//
import { TabsModule } from './pages/tabs/tabs.module';
import { CharacterModule } from './pages/character/character.module';
import { TableModule } from './pages/character/table/table.module';
import { StaffModule } from './pages/staff/staff.module';
import { StudentsModule } from './pages/students/students.module';
import { AddModule } from './pages/students/add/add.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TabsModule,
    CharacterModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StaffModule,
    StudentsModule,
    AddModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
