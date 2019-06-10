import { CommonService } from '../../../core/services/common.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { JwtService } from '../../../core/services/jwt.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'codetrac-support-pop-up',
  templateUrl: './support-pop-up.component.html',
  styleUrls: ['./support-pop-up.component.css']
})
export class SupportPopUpComponent implements OnInit {
  @ViewChild('cancelModal') cancelModal: ElementRef;
  @ViewChild('modalRef') modalRef: ElementRef;
  @ViewChild('supportDetails') userForm: NgForm;


  supportDropDownVal = ['Account is blocked', 'Forgot username', 'Reset password', 'Mobile application login', 'Others'];
  selectedCountryCode = '+91';


  countryCodeData = [
    {
      label: 'Australia	+61	',
      value: '+61'
    },
    {
      label: 'China +86',
      value: '+86'
    },
    {
      label: 'India +91',
      value: '+91'
    },
    {
      label: 'Mexico +52',
      value: '+52'
    },
    {
      label: 'Singapore	+65',
      value: '+65'
    },
    {
      label: 'Sri Lanka	+94',
      value: '+94'
    },
    {
      label: 'Switzerland	+41',
      value: '+41'
    },
    {
      label: 'UK +44',
      value: '+44'
    },
    {
      label: 'United Arab Emirates	+971',
      value: '+971'
    },
    {
      label: 'USA +1',
      value: '+1'
    }

  ];

  emailid = '';
  phno = '';
  regno = '';
  isVisible = true;

  constructor(private commonService: CommonService,
              private toastr: ToastrService,
              private jwtService: JwtService,
    ) { }
  ngOnInit() {

  }

  closeSupportModal() {
    this.cancelModal.nativeElement.click();
  }




}
