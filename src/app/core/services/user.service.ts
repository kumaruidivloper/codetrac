import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  activate_user(data: { activate: boolean; verificationtoken: string; }) {
    throw new Error("Method not implemented.");
  }

//     selectedOrg;

//     private _loginUrl = environment.apiendpoint + 'user/signin';
//     private _signupUrl = environment.apiendpoint + 'user/signup';

//     private _activationUrl = environment.apiendpoint + 'user/activateUser';
//     private _forgotpasswordUrl = environment.apiendpoint + 'user/forgotpassword';
//     private _changepasswordUrl = environment.apiendpoint + 'user/verifyforgotpassword';
//     private _domain_detailsUrl = environment.apiendpoint + 'organization/getdomaindetails';
//     private _registry_detailsUrl = environment.apiendpoint + 'common/getregistry';
//     private _support_deatilsUrl = environment.apiendpoint + 'feedback/support';
//     private _forceChangePasswordUrl = environment.apiendpoint + 'user/changePassword';
//     private _getOTP = environment.apiendpoint + 'user/getotp';
//     private _validateOTP = environment.apiendpoint + 'user/validateotp';

//      headers_signin = {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0'
//     };

//     headers_signup = {
//        'Content-Type': 'application/json',
//         'Authorization': 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0'
//     };

//     constructor(private http: HttpClient,
//         private _router: Router) {
//         }

//     registerUser(user) {
//         return this.http.post<any>(this._signupUrl, user);
//        /*  , {
//             headers: this.headers_signup
//         } */
//     }

//     loginUser(user) {
//         const user1 = new HttpParams()
//             .set('grant_type', 'password')
//             .set('username', user.username)
//             .set('password', user.password)
//             .set('sau', user.sau)
//             .set('domainid', user.domainid);
//         return this.http.post<any>(this._loginUrl, user1.toString(), {
//             headers: this.headers_signin
//         });


//         // const user1 = { "username": "srihari.thangirala@manipalglobal.com",
//         // "pass": "edunxt", "confpass": "edunxt", "domain": "Test Institute" }
//         // console.log(user1);
//         // return this.http.post<any>(this._loginUrl, user1, {
//         //   headers: this.headers
//         // });
//     }

//     // logoutUser() {
//     //     localStorage.removeItem('token');
//     //     this._router.navigate(['/events']);
//     // }

//     // getToken() {
//     //     return localStorage.getItem('token');
//     // }

//     // loggedIn() {
//     //     return !!localStorage.getItem('token');
//     // }

//     activate_user(data) {
//         return this.http.post<any>(this._activationUrl, data);
//     }

//     forgot_password(data) {
//         return this.http.post<any>(this._forgotpasswordUrl, data);
//     }

//     change_password(data) {
//         return this.http.post<any>(this._changepasswordUrl, data);

//     }

//     get_domian_details(data) {
//         return this.http.post<any>(this._domain_detailsUrl, data);
//     }

//     get_registry_details(data) {
//         return this.http.post<any>(this._registry_detailsUrl, data);
//     }

//     getOtp(data) {
//         return this.http.post<any>(this._getOTP, data);
//     }

//     validateOtp(data) {
//         return this.http.post<any>(this._validateOTP, data);
//     }

}
