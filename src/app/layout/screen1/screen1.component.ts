import { ApiGenerator } from './../../framework/ApiGenerator';
import { BaseComponent } from './../../framework/BaseCompo';
import { TaskCode } from './../../framework/global';
import { CommonService } from './../../framework/common.service';
import { Router } from '@angular/router';
import { Cat } from './../../get';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component extends BaseComponent implements OnInit {

  dataList:Cat;
  constructor(
    public router: Router,
    public service: CommonService,
  ) {
    super(service);
  }
  ngOnInit() {
    this.test();
  }
  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.TEST_API:
        const subAreaRes = response as Cat;
        this.dataList = subAreaRes;
        console.log(response);
        break;
        }
        
      
      }
      return isSuccess;
    }

    test() {
      this.downloadData(ApiGenerator.getTest());
    }
}
