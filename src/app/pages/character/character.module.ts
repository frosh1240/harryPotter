import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [CharacterComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CharacterRoutingModule,
    MaterialModule,
  ],
  exports: [CharacterComponent],
})
export class CharacterModule {}
