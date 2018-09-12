import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-demo-modal-use-component',
  templateUrl: './demo-modal-use-component.component.html',
  styleUrls: ['./demo-modal-use-component.component.css']
})
export class DemoModalUseComponentComponent implements OnInit {

  bsModalRef:BsModalRef;

  constructor(private modelService:BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent(){
    const initialState={
      list:[
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title:'Modal with component'
    };

    this.bsModalRef=this.modelService.show(ModalContentComponent,{initialState});
    this.bsModalRef.content.closeBtnName='Close';
  }
}

@Component({
  selector: 'modal-content',
  template: `
  <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}



