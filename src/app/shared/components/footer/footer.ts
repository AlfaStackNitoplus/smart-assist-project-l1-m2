import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButton],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private router: Router) { }
  onAbout() {
    window.open(
      '/smart-assist-project-l1-m2/#/about',
      '_blank'
    );

  }


}
