import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project.routing';
import { SharedModule } from '../shared/shared.module';
import { ProjectService } from './project.service';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
  ],
  providers: [
    ProjectService
  ],
  declarations: [ProjectComponent, EditPersonnelComponent]
})
export class ProjectModule { }
