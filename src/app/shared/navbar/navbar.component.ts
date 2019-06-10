import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../core/services/jwt.service';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'codetrac-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  domainLogoImgUrl = '';
  profileImageUrl = '';
  domainNameList = [];
  domainName = '';
  logoUrl = '';
  routerEvents: Subscription;
  routeUrl;
  displayname = '';
  showSmallLogo = false;
  show = false;
  orgId;
  personId;
  allActiveCourses;
  hideViewAll = false;
  domainRegistryDetails = {
    domainid: '',
    registrykey: ['ORGANIZATION_SETTINGS', 'SUPPORT_SUBJECTS']
  };
  language = '';
    constructor(private router: Router,
                private jwtService: JwtService,
                private userService: UserService,
                private translate: TranslateService,
                ) { }
    ngOnInit() {

      const jwData = localStorage.getItem('jwtToken');
      const domainData = localStorage.getItem('domain_details');
      const parsedDomainData = JSON.parse(domainData);
      const parsedjWData = JSON.parse(jwData);
      this.personId = parsedjWData.personid;
      this.orgId = parsedDomainData.Domain.fk_domainid;
      console.log('===navbar===');
      const localStorageDomainData = JSON.parse(
          window.localStorage.getItem('domain_details')
        );

      if (!localStorage.getItem('language')) {
          this.translate.setDefaultLang('en');
          this.language = 'en';
        } else {
          this.translate.setDefaultLang(localStorage.getItem('language'));
          this.language = localStorage.getItem('language');
        }

      if (localStorageDomainData) {

          console.log('===in navbar==');
          console.log(this.domainRegistryDetails);
          console.log('===in navbar==');
          this.domainRegistryDetails.domainid = localStorageDomainData.Domain.fk_domainid;
          // this.userService
          // .get_registry_details(this.domainRegistryDetails)
          // .subscribe(
          //   response => {
          //     console.log(response.data);
          //     this.jwtService.store_registry_details(
          //       response.data.ORGANIZATION_SETTINGS
          //     );
          //     this.jwtService.store_settings(response.data);
          //     // this.userPopUpService.settings.next(
          //     //   JSON.parse(response.data.ORGANIZATION_SETTINGS)
          //     // );
          //     if (response.data.SUPPORT_SUBJECTS) {
          //       const data = JSON.parse(response.data.SUPPORT_SUBJECTS);
          //     }
          //   },
          //   err => {
          //     console.log(err);
          //   }
          // );

        }
      console.log('===navbar===');
      this.getDetails();
      // this.userPopUpService.mouseenter.subscribe( data => {
      //     const localStorageMenuLocked = JSON.parse(
      //       window.localStorage.getItem('menuLocked')
      //     );
      //     if (localStorageMenuLocked) {
      //       this.show = false;
      //     } else {
      //       // this.show = data;
      //       this.show = false;
      //     }

      //   });
    }
    logOut() {
        this.jwtService.logout_clear_storage();
        this.router.navigate(['/signin']);
      }

      onClickChangePassword() {
        // this.userPopUpService.changePassword.next(true);
        // this.userPopUpService.forceChangePassword.next(false);
      }

      onClick(domain, event) {

        const assigndomain = {Domain: domain};
        // Organization dropdown firefox issue fixed: target = event.target || event.srcElement
        const target = event.target || event.srcElement;
        this.domainName = target.outerText;
        this.jwtService.store_domain_details(assigndomain);
        console.log('===onclick===');
        console.log(window.localStorage.domain_details);
        // localStorage.domain_details.Domain.communityid
        const org = JSON.parse(window.localStorage.domain_details);
        // this.userService.selectedOrg = domain.communityid;
        console.log('===onclick===');
        // location.reload();
        // this.router.navigate(['/dashboard']);
        location.href = '/dashboard';
      }
      getDetails() {
        const localStorageDomainData = JSON.parse(window.localStorage.getItem('domain_details'));
        if (localStorageDomainData.length !== 0) {
          console.log('===logo==');
          console.log(localStorageDomainData.Domain.logo_uri);
          console.log('===logo==');
          if (localStorageDomainData.Domain.logo_uri) {
            this.domainLogoImgUrl = localStorageDomainData.Domain.logo_uri;
          } else if (localStorageDomainData.Domain.fileuri) {
            this.domainLogoImgUrl = localStorageDomainData.Domain.fileuri;
          } else {
            this.domainLogoImgUrl = '../../assets/icons/edunxt_logo.svg';
          }
        }
        const localStorageData = this.jwtService.getToken();
        if (localStorageData.length !== 0) {
          if (localStorageData.profileimageuri) {
            this.profileImageUrl = localStorageData.profileimageuri;
          } else {
            this.profileImageUrl = '../../assets/images/default-user-avatar.png';
          }

          if (localStorageData.displayname) {
              this.displayname = localStorageData.displayname;
          }

          if (localStorageData.personid) {
            const personId = {personid: localStorageData.personid};
          }
        }
      }


   mouseEnter() {
    console.log('entered');
    // this.userPopUpService.hidesideinnermenus.next(false);
    // this.userPopUpService.mouseenter.next(true);

  }

  mouseLeave() {
    console.log('left');
    // this.userPopUpService.mouseenter.next(false);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
    localStorage.setItem('language', language);

  }

  navCourseOverview(navId) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
              this.router.navigate(['/course/overview', navId]));
  }

  navProfileLearner() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
              this.router.navigate(['/course/profile-learner', this.personId]));
  }

      /* ngOnDestroy() {
        // this.routerEvents.unsubscribe();
      } */
}
