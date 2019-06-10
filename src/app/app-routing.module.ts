import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CanDeactivateGuardService } from './core/services/can-deactivate-guard.service';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  }
  // },
  // // {
  // //   path: 'dashboard',
  // //   loadChildren: './dashboard/dashboard.module#DashboardModule',
  // //   canActivate: [AuthGuard]
  // // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule],
  providers: [CanDeactivateGuardService]
})
export class AppRoutingModule { }
