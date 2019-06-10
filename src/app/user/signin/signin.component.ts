import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { NgForm } from '@angular/forms';
import { JwtService } from '../../core/services/jwt.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'codetrac-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  passwordVisible = false;
  password: string;
  login: any;
  loginList: any;
  auname: string;
  apassword: any;
  jsonURL = 'assets/authenticate.json';
  validateForm: FormGroup;
  showError = false;
  errMessage: string;
  errDescription: string;
  isLoadingOne = false;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private message: NzMessageService) {
      this.http.get(this.jsonURL).subscribe(data => {
  // tslint:disable-next-line: no-string-literal
        this.auname = data['username'];
  // tslint:disable-next-line: no-string-literal
        this.apassword = data['password'];
        console.log(data);
       });
     }

     ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    }

    submitForm() {
      const username = this.validateForm.controls.userName.value;
      const password = this.validateForm.controls.password.value;
  // tslint:disable-next-line: forin
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }

      if (this.validateForm.valid) {
        setTimeout(() => {
          this.isLoadingOne = false;
        }, 5000);
        if (username === this.auname && password === this.apassword) {
          this.isLoadingOne = false;
              this.router.navigate(['/dashboard']);
            // alert("redirect to dashboard");
          } else {
            this.message.create('error', `Invalid UserName or Password Try again`);
            this.isLoadingOne = false;
            // this.showError = true;
            // this.errMessage = "Warning";
            // this.errDescription = "Invalid UserName or Password Try again";
            // alert("Invalid UserName or Password Try again");
          }
      }


    }
}
