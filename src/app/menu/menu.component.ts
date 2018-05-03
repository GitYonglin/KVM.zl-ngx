import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  meuns = [];
  constructor( private _dialogRef: MatDialogRef<MenuComponent>,
    private _router: Router
  ) {
    this.meuns = [
      {
        name: '任务',
        icon: 'avatars:svg-1',
        url: 'task'
      },
      {
        name: '构件',
        icon: 'avatars:svg-2',
        url: 'component'
      },
      {
        name: '项目',
        icon: 'avatars:svg-3',
        url: 'project'
      },
      {
        name: '设备',
        icon: 'avatars:svg-4',
        url: 'device'
      },
      {
        name: '设置',
        icon: 'avatars:svg-5',
        url: 'setting'
      },
      {
        name: '帮助',
        icon: 'avatars:svg-6',
        url: 'help'
      },
    ];
  }

  ngOnInit() {
  }
  go(url) {
    this._router.navigate([url]);
    this._dialogRef.close();
    console.log(url);
  }
}
