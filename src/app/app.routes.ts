import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { User } from './features/user/user';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { TechnicalDetailsLearnt } from './features/user-manual/technical-details-learnt/technical-details-learnt';
import { UserManual } from './features/user-manual/user-manual/user-manual';
import { Resource } from './features/user-manual/resource/resource';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: Login },
            { path: 'user-manual', component: UserManual },
            { path: 'technical-details-learnt', component: TechnicalDetailsLearnt },
            {path: 'resource', component: Resource},
        ]
    },
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'user', component: User },

        ]
    },
];
