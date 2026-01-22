import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { User } from './features/user/user';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
   {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: Login },
        ]
    },
    { path: 'user', component: User }
];
