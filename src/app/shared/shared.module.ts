import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SupportPopUpComponent } from './components/support-pop-up/support-pop-up.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { ReverseStr } from './strip-avatarname.pipe';
import { FileExportComponent } from './components/file-export/file-export.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmLeaveComponent } from './components/confirm-leave/confirm-leave.component';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    SupportPopUpComponent,
    TermsConditionsComponent,
    ProfileHeaderComponent,
    FooterComponent,
    FileExportComponent,
    NavbarComponent,
    SidebarComponent,
    ReverseStr
  ],
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  declarations: [
    SupportPopUpComponent,
    ProfileHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TermsConditionsComponent,
    ReverseStr,
    FileExportComponent,
    ConfirmLeaveComponent
  ]
})
export class SharedModule {}
