import { Component, OnInit } from '@angular/core';
import { Menus as MenuData } from '../modules/leftMenu.module';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  menus$: MenuData[];
  title = '任务';

  constructor() {
    this.menus$ = [
      {
        id: '1',
        name: 'T梁',
        icon: 'avatars:svg-1',
        bridge: [
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三....号' },
        ]
      },
      {
        id: '1',
        name: '箱梁',
        icon: 'avatars:svg-2',
        bridge: [
          { id: '1', name: '一号' },
          { id: '2', name: '二号' },
          { id: '3', name: '三号' },
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
