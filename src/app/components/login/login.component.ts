import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  usuario = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (this.usuario === 'paciente' && this.password === '1234') {

      localStorage.setItem('login', 'true');

      this.router.navigate(['/home']);

    } else {

      alert('Usuario o contraseña incorrectos');

    }

  }