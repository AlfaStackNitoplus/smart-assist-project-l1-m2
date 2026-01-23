import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule,MatButton],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private router: Router) { }
 onAbout() {
    const url = this.router.serializeUrl(
    this.router.createUrlTree(['/#/about'])
  );
  window.open(url, '_blank');
  }

}
