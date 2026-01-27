import { Component } from '@angular/core';
import { Header } from '../../core/components/header/header';
import { Footer } from '../../core/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer,RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
 version: string = 'L1-M2';
 develop: string = 'Smart Assist Team';
}
