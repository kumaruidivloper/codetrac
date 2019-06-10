import { CommonService } from '../core/services/common.service';

import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../core/services/user.service';
import { JwtService } from '../core/services/jwt.service';
import { SupportPopUpComponent } from '../shared/components/support-pop-up/support-pop-up.component';
import { TermsConditionsComponent } from '../shared/components/terms-conditions/terms-conditions.component';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'codetrac-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  domainLogoImgUrl = '';


  constructor(
    private router: Router,
    private translate: TranslateService,
    private jwtService: JwtService,

    public commonservice: CommonService,
    private toastr: ToastrService
  ) {}

  // doamin_details = {
  //   domainUrl: '',
  //   domainid: ''
  // };

  // domain_registry_details = {
  //   domainid: '',
  //   registrykey: ['ORGANIZATION_SETTINGS', 'SUPPORT_SUBJECTS']
  // };
  // login_msg: string;
  // deactivate_login: boolean;

  supportDropDownVal = [];
  loggedIn = false;
  ngOnInit() {
    this.loggedIn = window.localStorage.is_loggedin;
    // call to get support Settings dropDown

    if (
      window.localStorage.is_loggedin !== undefined &&
      window.localStorage.is_loggedin === 'true'
    ) {
      const localStorageDomainData = JSON.parse(
          window.localStorage.getItem('domain_details')
        );
      // this.doamin_details.domainUrl = '';
      // this.doamin_details.domainid = localStorageDomainData.Domain.fk_domainid;
      this.router.navigate(['/dashboard']); // TODO: Need to make dynamic
    }
    // if(!this.doamin_details.domainid){
    //     this.doamin_details.domainUrl = environment.defaultdomain;
    //
  }

  showSuccess() {
    const msg12 = this.translate.instant('components1.toaster1.hello');
    this.toastr.success('', msg12);
  }


  useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

}
