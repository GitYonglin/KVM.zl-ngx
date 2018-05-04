import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';
import { SharedModule } from '../shared/shared.module';
import { DeviceRoutingModule } from './device.routing';
import { FormControlComponent } from '../dynamic-form/form-control.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DeviceRoutingModule,
  ],
  declarations: [
    DeviceComponent,
    FormControlComponent
  ]
})
export class DeviceModule { }
