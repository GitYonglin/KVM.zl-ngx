import { Action } from '@ngrx/store';
import * as LoginAction from '../actions/login.actions';


export function LoginReducer(state = false, action: LoginAction.Actions ): boolean {
  switch (action.type) {
    case LoginAction.LOGIN_SUCCESS:
      return true;
    case LoginAction.LOGIN_FAILED:
      return false;
    default:
      return state;
  }
}
