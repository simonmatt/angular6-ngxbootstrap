import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-demo-accordion-open-event',
  templateUrl: './demo-accordion-open-event.component.html',
  styleUrls: ['./demo-accordion-open-event.component.css']
})
export class DemoAccordionOpenEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(event:boolean){
    // console.log(this.el.ref.querySelector('#accordion'))
    console.log(`Accordion has been ${event?'opened':'closed'}`);
  }
}
