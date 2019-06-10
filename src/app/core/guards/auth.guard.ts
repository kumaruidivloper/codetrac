import { CommonService } from '../services/common.service';
import { JwtService } from '../services/jwt.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router,
              private jwtService: JwtService,
              private commonService: CommonService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    if (url.includes('createCourse')) {
     const key = 'COURSE_CRUD_ACCESS_ROLES';
      // call registry api to get role based access
    //  this.commonService.getRegistryConfigs(key).subscribe(
    //     res => {
    //       if (res && res.data) {
    //         let roles = [];
    //         let currentRoleid = 0;
    //         const localStorageData = this.jwtService.getToken();
    //         if (localStorageData.length !== 0 && localStorageData.roleid) {
    //       currentRoleid = localStorageData.roleid;
    //     }
    //         // Hard coded for testing purpose--need to comented
    //         // currentRoleid = 2;
    //         // roles = Array.from(res.data.COURSE_CRUD_ACCESS_ROLES.trim());
    //         roles = res.data.COURSE_CRUD_ACCESS_ROLES.toString().trim().split(',');


    //         for (const role of roles) {
    //           if (+role === +currentRoleid ) {
    //             this.router.navigate(['/createCourse']);
    //             return true;
    //           }
    //         }
    //         this.router.navigate(['/dashboard']);
    //         return false;
    //       }

    //     },
    //     err => {
    //       console.log(err);

    //     }
    //   );
    }
    return this.verifyLogin(url);
  }

  verifyLogin(url): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/signin']);
      return false;
    } else if (this.isLoggedIn()) {
      // this.router.navigate(['../dashboard']);
      return true;
    }
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (window.localStorage.getItem('is_loggedin') !== undefined && window.localStorage.getItem('is_loggedin') === 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
