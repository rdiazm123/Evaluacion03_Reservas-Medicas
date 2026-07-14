import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.error = '';
      this.router.navigate(['/reservas']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
