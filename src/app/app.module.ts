import { NgxElectronModule } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ComponentModule } from './component/component.module';
import { DeviceModule } from './device/device.module';
import { ProjectService } from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxElectronModule,
    HttpModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    ComponentModule,
    DeviceModule,
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
