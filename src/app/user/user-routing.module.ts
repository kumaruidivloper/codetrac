import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
       component: UserComponent,
    children: [
        {
            path: '',
            redirectTo: 'signin',
            pathMatch: 'full'
        },
        {
            path: 'signin',
            component: SigninComponent
            // resolve: {
            //     can_activate: UserActivationResolver
            // },
        }

    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
