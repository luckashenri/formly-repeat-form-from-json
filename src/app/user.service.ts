import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/user.json');
  }

  getForm() {
    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/form.json');
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */