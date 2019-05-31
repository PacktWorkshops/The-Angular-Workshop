import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  receivedChildMessage: string;
  messageToSendP: any = '';

  constructor() { }

  ngOnInit() {
  }



  sendToChild(message: string) {
    this.messageToSendP = message;
  }



  getMessage(message: string) {
    this.receivedChildMessage = message;
  }



}
