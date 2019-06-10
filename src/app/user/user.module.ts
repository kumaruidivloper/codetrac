import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgZorroAntdModule
  ],
  declarations: [SigninComponent, UserComponent],
  providers: [CookieService,
    { provide: NZ_I18N, useValue: en_US }]
})
export class UserModule { }
