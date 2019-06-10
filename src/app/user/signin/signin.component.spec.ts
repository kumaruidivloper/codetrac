import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserRoutingModule } from './../user-routing.module';
import { SigninComponent } from './signin.component';
import { UserComponent } from '../user.component';
import { UserService } from '../../core/services/user.service';
import { UserpopupService } from '../../core/services/userpopup.service';
import { JwtService } from '../../core/services/jwt.service';
import { CommonService } from 'app/core/services/common.service';
import { of, throwError } from 'rxjs';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SharedModule } from 'app/shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { ToastrModule } from 'ngx-toastr';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        SharedModule,
        AppRoutingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
        })
      ],
      declarations: [ SigninComponent, UserComponent, SignupComponent, ForgotPasswordComponent],
      providers: [UserService, UserpopupService, JwtService, CommonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* fit("signin title", () => {
    expect(component.title).toEqual("edunxt");
  }); */

  /* fit('test user service loginUser function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {
        userService
          .loginUser({ username: 'admin123@admin.com', password: 'password' })
          .subscribe(res => {
            expect(res).toEqual({ status: 'success' });
          });
        backend
          .expectOne({
            url: 'http://54.205.51.123:4056/user/signin',
            method: 'POST'
          })
          .flush({ status: 'success' });
      }
    )
  )); */

  fit('test user service loginUser  success,forcechangepassword=false function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {
        spyOn(userService, 'loginUser').and.returnValue(
          of({ status: 'success',
            message: 'res.data.forcechangepassword = false',
            data: { forcechangepassword: false }
          })
        );
        /* spyOn(userService, 'get_domian_details').and.returnValue(
          of({
            status: 'success',
            message: 'The post request is success',
            data: { forcechangepassword: false }
          })
        ); */

        component.signin_user();

        expect(component.forceChangePassword).toBeFalsy();
        expect(component.invalid_user).toBeFalsy();
        // expect(component.is_loading).toBeFalsy();

      }
    )
  ));

  fit('test user service loginUser  success,forcechangepassword=true function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {
        spyOn(userService, 'loginUser').and.returnValue(
          of({ status: 'success',
            message: 'res.data.forcechangepassword = false',
            data: { forcechangepassword: true }
          })
        );
        /* spyOn(userService, 'get_domian_details').and.returnValue(
          of({
            status: 'success',
            message: 'The post request is success',
            data: { forcechangepassword: false }
          })
        ); */

        component.signin_user();

        expect(component.forceChangePassword).toBeFalsy();
        expect(component.invalid_user).toBeFalsy();
        // expect(component.is_loading).toBeFalsy();

      }
    )
  ));

  fit('test user service loginUser  failed,res.data function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {
        spyOn(userService, 'loginUser').and.returnValue(
          of({ status: 'failed',
            message: 'response failed',
            data: { error: 'login_deactive'}
          })
        );
        /* spyOn(userService, 'get_domian_details').and.returnValue(
          of({
            status: 'success',
            message: 'The post request is success',
            data: { forcechangepassword: false }
          })
        ); */

        component.signin_user();

        expect(component.is_loading).toBeFalsy();

      }
    )
  ));

  fit('test user service loginUser  failed function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {
        spyOn(userService, 'loginUser').and.returnValue(
          of({ status: 'failed',
            message: 'response failed'
          })
        );
        /* spyOn(userService, 'get_domian_details').and.returnValue(
          of({
            status: 'success',
            message: 'The post request is success',
            data: { forcechangepassword: false }
          })
        ); */

        component.signin_user();

        expect(component.invalid_user).toBeFalsy();
        expect(component.is_loading).toBeFalsy();

      }
    )
  ));

  fit('test user service loginUser error function', async(
    inject(
      [UserService, HttpTestingController],
      (userService: UserService, backend: HttpTestingController) => {

        spyOn(userService, 'loginUser').and.returnValue(
          throwError({})
        );

        component.signin_user();

        expect(component.is_loading ).toBeFalsy();
        expect(component.invalid_user  ).toBeTruthy();

      }
    )
  ));

  fit('passwordtoggle', () => {
    component.passwordtoggle();
    fixture.detectChanges();
    expect(component.show).toBeTruthy();
    expect(component.iconChange).toBeFalsy();
  });

  fit('close_errmsg, account_verified_close', () => {
    component.close_errmsg();
    component.account_verified_close();
    fixture.detectChanges();
    expect(component.invalid_user).toBeFalsy();
    expect(component.account_verified).toBeFalsy();
  });

  /* fit('test if login name entered or not', () => {
    let input = fixture.debugElement.query(By.css('[name="username"]'));
    input.nativeElement.focus();
    input.nativeElement.blur();
    fixture.detectChanges();
    let paragraph = fixture.debugElement.query(By.css('#username_error'));
    expect(paragraph.nativeElement.textContent).toBe(
      'Please Enter a valid Login Name'
    );
  }); */

  /* fit('test if passsword entered or not', () => {
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('[name="username"]'));
    input.nativeElement.dispatchEvent(new Event('input'));
    input.nativeElement.focus();
    input.nativeElement.blur();
    fixture.detectChanges();
    let paragraph = fixture.debugElement.query(By.css('#username_error'));

    expect(paragraph.nativeElement.textContent).toBe(
      'Please Enter a valid Login Name'
    );
  }); */
});

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
