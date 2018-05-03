import { Component, OnInit } from '@angular/core';
import { Menus as MenuData } from '../modules/leftMenu.module';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  menus$: MenuData[];

  constructor(private _service: ProjectService ) {
    this.menus$ = [];
  }

  ngOnInit() {
    this._service.getProjectMenuData().subscribe(p => {
      this.menus$ = p;
      console.log('123', p);
    });
  }

}
