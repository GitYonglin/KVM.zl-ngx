import { Component, OnInit, Input } from '@angular/core';
import { listAnim } from '../../animas/list.anim';
import { MatDialog } from '@angular/material';
import { MenuComponent as AppMenu } from '../../menu/menu.component';
import { Menus as MenuData } from '../../modules/leftMenu.module';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [ listAnim ]
})
export class MenuComponent implements OnInit {
  bridgeState = false;
  indexActive = -1;

  @Input()
    menus: MenuData[];

  constructor(private _dialog: MatDialog) {
    // this.menus = [
    //   {
    //     name: 'T梁',
    //     icon: 'avatars:svg-1',
    //     bridge: [
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三....号'},
    //     ]
    //   },
    //   {
    //     name: '箱梁',
    //     icon: 'avatars:svg-2',
    //     bridge: [
    //       {id: '1', name: '一号'},
    //       {id: '2', name: '二号'},
    //       {id: '3', name: '三号'},
    //     ]
    //   },
    // ];
  }

  ngOnInit() {
    console.log(this.menus);
    this.bridgeState = this.menus && this.menus.length > 0 && 'bridge' in this.menus[0];
  }

  onClick(index, id) {
    if (index === this.indexActive) {
      this.indexActive = -1;
    } else {
      this.indexActive = index;
    }
    console.log('menu点击--', id);
  }
  onBridge(id) {
    console.log(id);
  }
  appMenu() {
    this._dialog.open(AppMenu);
  }
}
