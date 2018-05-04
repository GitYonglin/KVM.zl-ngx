import { Component, OnInit } from '@angular/core';
import { Menus as MenuData } from '../modules/leftMenu.module';
import { FieldBase, Textbox } from '../dynamic-form/form-field';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Device } from '../modules/device.module';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  menus$: MenuData[];
  deviceData: Device;
  title = '设备';
  deviceForm: FormGroup;
  fields: FieldBase<any>[] = [
    new Textbox({
      key: 'sName',
      matPrefix: '设备名称',
      verification: [
        Validators.required,
      ],
      errors: {
        required: '设备名称必须输入。'
      }
    }),
    new Textbox({
      key: 'aWorkMode',
      matPrefix: '设备工作模式'
    }),
    new Textbox({
      key: 'sJackModel',
      matPrefix: '千斤顶型号'
    }),
    new Textbox({
      key: 'sPumpModel',
      matPrefix: '油泵型号'
    }),
    new Textbox({
      key: 'dCalibrationDate',
      matPrefix: '标定日期'
    }),
    new Textbox({
      key: 'bEquation',
      matPrefix: '标定方程式'
    }),
  ];

  constructor(public fb: FormBuilder) {
    this.menus$ = [
      {
        id: '1',
        name: '150T',
        icon: 'avatars:svg-1',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
      {
        id: '2',
        name: '500T',
        icon: 'avatars:svg-2',
      },
    ];
  }

  ngOnInit() {
    this.deviceForm = this.toFormGroup(this.fields);
  }
  toFormGroup(fields: FieldBase<any>[]) {
    // tslint:disable-next-line:prefer-const
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = new FormControl(
        field.value || '', field.verification || null
      );
    });
    return new FormGroup(group);
  }

}

// sName: string; // 设备名称
//   aWorkMode: string[]; // 设备工作模式 A单顶 A两顶 B单顶 B两顶 4顶
//   sJackModel: string; // 千斤顶型号
//   sPumpModel: string; // 油泵型号
//   dCalibrationDate: Date; // 标定日期
//   bEquation: boolean; // 标定方程式 true
