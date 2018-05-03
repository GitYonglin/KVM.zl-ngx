import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { SharedModule } from '../shared/shared.module';
import { TaskRoutingModule } from './task.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
