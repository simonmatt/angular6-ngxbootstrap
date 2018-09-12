import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-collapse-basic',
  templateUrl: './demo-collapse-basic.component.html',
  styleUrls: ['./demo-collapse-basic.component.css']
})
export class DemoCollapseBasicComponent implements OnInit {

  isCollapsed=false;
  constructor() { }

  ngOnInit() {
  }

}
