import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { User } from './features/user/user';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'user', component: User }
];
