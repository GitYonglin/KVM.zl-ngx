import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [MenuComponent],
  entryComponents: [
    MenuComponent
  ]
})
export class MenuModule { }
