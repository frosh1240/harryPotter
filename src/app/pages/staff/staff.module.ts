import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [StaffComponent],
  imports: [CommonModule, StaffRoutingModule, MaterialModule],
})
export class StaffModule {}
