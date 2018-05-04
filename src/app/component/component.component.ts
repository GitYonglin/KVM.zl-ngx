import { Component, OnInit } from '@angular/core';
import { Menus as MenuData } from '../modules/leftMenu.module';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  menus$: MenuData[];
  title = '构件';

  constructor() {
    this.menus$ = [
      {
        id: '1',
        name: 'T梁',
        icon: 'avatars:svg-1',
      },
      {
        id: '2',
        name: '箱梁',
        icon: 'avatars:svg-2',
      },
    ];
  }

  ngOnInit() {
  }

}
