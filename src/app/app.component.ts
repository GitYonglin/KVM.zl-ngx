import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  msg = 0;
  constructor( private _http: Http, private _electronService: ElectronService) {
  }

  ngOnInit() {
    // this._http.get('http://localhost:8001/home/init').subscribe(e => console.log(e));
    // this._electronService.ipcRenderer.on('asynchronous-reply', (event: any, arg: any) => {
    //   console.log(arg);
    //   // this.msg++;
    // });
  }

  onClick() {
    // alert('按钮');
    // this.msg++;
    // this._electronService.ipcRenderer.send('sync-msg', 'ping');
  }
}
