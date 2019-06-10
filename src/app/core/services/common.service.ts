import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Injectable()
export class CommonService {
 // private getResistryUrl = environment.apiendpoint+'common/getregistry';
 // private _support_deatilsUrl = environment.apiendpoint+'feedback/support';
//  private _forceChangePasswordUrl = environment.apiendpoint+'user/changePassword';
  supportCallMsg: BehaviorSubject<string>;
  supportCallHasError: BehaviorSubject<boolean>;
  componentTitle: BehaviorSubject<string>;
  domainName: BehaviorSubject<string>;
  deletedDomainName: BehaviorSubject<string>;
  userlistlendth: BehaviorSubject<boolean>;
  navLoadingFlag: BehaviorSubject<boolean>;
  fieldArray: BehaviorSubject<Array<string>>;
  titleDomainName: BehaviorSubject<string>;

  batchId: BehaviorSubject<number>;
  batchesRerender: BehaviorSubject<number>;

  groupsRerender: BehaviorSubject<number>;

  forCreateGroup: BehaviorSubject<boolean>;

  rolePopulate: BehaviorSubject<number>;


  constructor(private http: HttpClient,
              private jwtService: JwtService) {
      this.supportCallMsg = new BehaviorSubject('');
      this.supportCallHasError = new BehaviorSubject(false);
      this.componentTitle = new BehaviorSubject('');
      this.domainName = new BehaviorSubject('');
      this.deletedDomainName = new BehaviorSubject('');
      this.userlistlendth = new BehaviorSubject(true);
      this.navLoadingFlag = new BehaviorSubject(false);
      this.fieldArray = new BehaviorSubject([]);
      this.batchId = new BehaviorSubject(0);
      this.batchesRerender = new BehaviorSubject(0);
      this.groupsRerender = new BehaviorSubject(0);
      this.forCreateGroup = new BehaviorSubject(true);
      this.rolePopulate = new BehaviorSubject(0);
      this.titleDomainName = new BehaviorSubject('');

    }

  // getResistry config for course path
  // fetch settings details onload of create coourse component
  getRegistryConfigs(key: string) {
    const data = {
      domainid: '',
      registrykey: []
    };
    let accessToken;
    let domainId;
      // TODO - Getting access token can be in seperate method and sendData should be in common API.
    const localStorageDomainData = JSON.parse(window.localStorage.getItem('domain_details'));
    if (localStorageDomainData && localStorageDomainData.length !== 0 ) {
             domainId = localStorageDomainData.Domain.fk_domainid;
          }
        /*const localStorageData = this.jwtService.getToken();
        if (localStorageData && localStorageData.length !== 0 ) {
          if ( localStorageData.access_token) {
            accessToken = 'Bearer' + ' ' + localStorageData.access_token;
          }
          if (localStorageData.domainid) {
            domainId = localStorageData.domainid;
          }
        } else {
          const localStorageDomainData = JSON.parse(window.localStorage.getItem('domain_details'));
          if (localStorageDomainData && localStorageDomainData.length !== 0 ) {
             domainId = localStorageDomainData.Domain.fk_domainid;
          }
        }*/
    const headerAccessToken = {
        'Content-Type': 'application/json',
        Authorization: `${accessToken}`
      };
    data.domainid = domainId;
    const path = [key];
    data.registrykey = path;
    // return this.http.post<any>(this.getResistryUrl, data, {
    //     headers: headerAccessToken
    //   });
  }

  submitSupportDetails(form: NgForm) {
    const data = {
      subject: '',
      email: '',
      contact: '',
      message: ''
    };
    data.subject = form.value.supportDropDownContent;
    data.email = form.value.emailId;
    data.contact = form.value.phoneNo;
    data.message = form.value.msgdesc;
   // return this.http.post<any>(this._support_deatilsUrl, data);
 }


}
