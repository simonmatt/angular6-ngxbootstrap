import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-datepicker-initial-state',
  templateUrl: './demo-datepicker-initial-state.component.html',
  styleUrls: ['./demo-datepicker-initial-state.component.css']
})
export class DemoDatepickerInitialStateComponent implements OnInit {

  bsValue=new Date();
  bsRangeValue:Date[];
  maxDate=new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate()+7);
    this.bsRangeValue=[this.bsValue,this.maxDate];
   }

  ngOnInit() {
  }

}
