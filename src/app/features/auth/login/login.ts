import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Input() title: string = 'Login';
  username = '';
  password = '';
  constructor(private router: Router) { }


  onLogin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // call your login service here
    this.router.navigate(['/user']);
  }
}
