import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentComponent } from './component.component';

const routes: Routes = [
  { path: 'component', component: ComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}
