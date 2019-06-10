import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
//import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'codetrac-confirm-leave',
  templateUrl: './confirm-leave.component.html',
  styleUrls: ['./confirm-leave.component.scss']
})
export class ConfirmLeaveComponent {

  subject: Subject<boolean>;

  constructor(){}//public bsModalRef: BsModalRef) { }

  action(value: boolean) {
  //  this.bsModalRef.hide();
    this.subject.next(value);
    this.subject.complete();
  }
}
