import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UserService } from './user.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  jsonData;
  model = null;
  // model = {name: "Lucas Henrique", phone: "123123123", moc: []};
  // model = {name: "Lucas Henrique", phone: "123123123", moc: [{name: "name 1", phone_number: "23423432"}]};
  fields: FormlyFieldConfig[];

  valueChanges: any;

  constructor(private userService: UserService) {
    this.form.valueChanges.subscribe(res => {
      // console.log('changes?', res);
      this.valueChanges = res;
    })
    this.userService.getForm().subscribe(res => {
      this.jsonData = res;
      this.fields = this.jsonData.fields;

      console.log('model primeirz vez', this.model)

      if (this.model === null) {
        this.fields.forEach(item => {
          if (item.type === 'repeat') {
            this.model = {...this.model, [item.key]: [{}]}
          }
          if (item.type === 'input') {
            this.model = {...this.model, [item.key]: null}
          }
        })
      } else {
        console.log('model nao ta vazio');
      }

    })
  }

  test() {
    console.log(this.form)
    // this.checkIfChanged();
  }

  checkIfChanged() {
    console.log('this.model', this.model)
    console.log('this.valueChanges', this.valueChanges)
    console.log('MUDOU ALGO?', this.model === this.valueChanges)
  }

  submit() {
    if (this.form.valid) {
      console.log('form valido');
      if (this.form.dirty) {
        console.log('form diferente');
        alert('faz o update dos dados');
        return;
      } else {
        console.log('form nao foi mexido');
        alert('fecha sem salvar, mas nao remove o checkbox');
        return;
      }
      alert('form mexido pela primeira vez');
    } else { 
      alert('form invalido, nao salvar');
    }
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */