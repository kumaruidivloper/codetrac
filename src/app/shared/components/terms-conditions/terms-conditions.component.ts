import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'codetrac-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})

export class TermsConditionsComponent implements OnInit {
  @ViewChild('cancelModal') cancelModal: ElementRef;
  @ViewChild('modalRef') modalRef: ElementRef;

  constructor() { }

  ngOnInit() {}

  calltermsconditionsPopUp() {
    //$('#terms-conditionsModal').modal('show');
   }

   closeSupportModal () {
    this.cancelModal.nativeElement.click();
  }

}
