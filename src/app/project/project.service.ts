import { Injectable } from '@angular/core';
import { Menus } from '../modules/leftMenu.module';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {
  menus = [
    {
      id: '1',
      name: '项目一1',
      icon: 'avatars:svg-1',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
    {
      id: '2',
      name: '项目二2',
      icon: 'avatars:svg-2',
    },
  ];

  constructor() { }

  public getProjectMenuData(): Observable<Menus[]> {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next(this.menus);
      }, 1500);
    });
  }
}
