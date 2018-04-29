import { NgxElectronModule } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
