import { Component, OnInit } from '@angular/core';
import { Menus as MenuData } from '../modules/leftMenu.module';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  menus: MenuData[];

  constructor() {
    this.menus = [
      {
        id: '1',
        name: '150T',
        icon: 'avatars:svg-1',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
    ];
  }

  ngOnInit() {
  }

}
