import { Component } from '@angular/core';
import { Footer } from '../../core/components/footer/footer';
import { Header } from '../../core/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [Header, Footer, RouterModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {
  version: string = 'L1-M2';
  develop: string = 'Smart Assist Team';

}
