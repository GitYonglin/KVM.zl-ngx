import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../ngrx/actions/login.actions';
import { MatDialog } from '@angular/material';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _loginState: Store<boolean>,
    private _dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onLogin() {
    // this._loginState.dispatch({ type: LOGIN_SUCCESS });
    this._dialog.open(MenuComponent);
  }
  onOut() {
    this._loginState.dispatch({ type: LOGIN_FAILED });
  }
}
