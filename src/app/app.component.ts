import { Component, OnInit } from '@angular/core';
import {
  DynamicFormModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicFormService,
  DynamicFormArrayModel
} from "@ng-dynamic-forms/core";
import { FormGroup, FormArray } from '@angular/forms';

export const MY_FORM_MODEL: DynamicFormModel = [

  new DynamicFormArrayModel({
    id: "myFormArray",
    groupFactory: () => {
      return [
          new DynamicInputModel({
              id: "myInput",
              label: "My Input"
          })
      ];
  }
  })
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;
  formArrayControl: FormArray;
  formArrayModel: DynamicFormArrayModel;

  constructor(private formService: DynamicFormService) {}

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formArrayModel = this.formService.findModelById<DynamicFormArrayModel>("myFormArray", this.formModel);
    this.formArrayControl = this.formService.findControlByModel<FormArray>(this.formArrayModel, this.formGroup);
  }

  removeItem(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
    this.formService.detectChanges();
  }

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
    this.formService.detectChanges();
  }
}
