import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-accordion',
  templateUrl: './dynamic-accordion.component.html',
  styleUrls: ['./dynamic-accordion.component.css']
})
export class DynamicAccordionComponent implements OnInit {

  groups=[
    {
      title:'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  addGroupItem():void{
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    })
  }
}
