// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

// Section 2
export const LOGIN_SUCCESS       = '[LOGIN] SUCCESS';
export const LOGIN_FAILED    = '[LOGIN] FAILED';

// Section 3
export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: Boolean = true) {}
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor(public payload: boolean = false) {}
}

// Section 4
export type Actions = LoginSuccess | LoginFailed;
