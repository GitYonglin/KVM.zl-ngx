import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { LoginReducer } from './ngrx/reducers/login.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({
      login: LoginReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [StoreModule, StoreDevtoolsModule]
})

export class AppStateModule {}
