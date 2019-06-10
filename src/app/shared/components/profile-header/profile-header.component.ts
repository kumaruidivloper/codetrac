import { Component, OnInit, Input } from '@angular/core';

// import { JwtService } from 'src/app/core/services/jwt.service';
import { JwtService } from '../../../core/services/jwt.service';

@Component({
  selector: 'codetrac-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  userName = '';
  profileImgUrl = '';
  @Input() headerinfo: any;
  helptext = 'Manage your Learners, Courses and Activities';
  sectionsName = '';
  sectionImgUrl = '';

  constructor(private jwtService: JwtService) { }

  ngOnInit() {
    const localStorageData = this.jwtService.getToken();
    if (localStorageData.length !== 0) {
          /*if (localStorageData.mail) {
            if(localStorageData.displayname)
              this.userName = localStorageData.displayname;
            else
              this.userName = localStorageData.mail.substring(0, localStorageData.mail.indexOf('@'));
          }
          if (localStorageData.profileimageuri) {
            this.profileImgUrl = localStorageData.profileimageuri;
          } else {
            this.profileImgUrl = '../../assets/images/default-user-avatar.png';
          }

          console.log("====headerinfo===");
          console.log(this.headerinfo);
          console.log("====headerinfo===");
*/
          if (this.headerinfo) {


            switch (this.headerinfo) {

              case 'editbatch':
              this.sectionsName = 'sectionsName1.user_manage';
              this.sectionImgUrl = '../../../../assets/icons/user-management.svg';
              this.helptext = 'sectionsName1.user_manage_help';
              break;
              case 'userhub':
                this.sectionsName = 'sectionsName1.user_manage';
                this.sectionImgUrl = '../../../../assets/icons/user-management.svg';
                this.helptext = 'sectionsName1.user_manage_help';
                break;
              case 'organization':
                this.sectionsName = 'sectionsName1.org_manage';
                this.sectionImgUrl = '../../../../assets/icons/user-management.svg';
                this.helptext = 'sectionsName1.org_manage_help';
                break;
              case 'createorganization':
                this.sectionsName = 'sectionsName1.org_manage';
                this.sectionImgUrl = '../../../../assets/icons/user-management.svg';
                this.helptext = 'sectionsName1.org_manage_help';
                break;
                case 'manageuser':
                this.sectionsName = 'sectionsName1.user_manage';
                this.sectionImgUrl = '../../../../assets/icons/user-management.svg';
                this.helptext = 'sectionsName1.user_manage_help';
                break;


            }

          }
        }
  }
}
