import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Login } from '../../features/auth/login/login';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-auth-layout',
  imports: [Login,Header,Footer],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {

}
