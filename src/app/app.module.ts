import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ]
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent, RepeatTypeComponent
  ],
  providers: [UserService],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */