import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {
  nombre: string = '';
  especialidad: string = '';
  fecha: string = '';
  fechaActual: string = '';

  datosGuardados: any[] = [];

  ngOnInit() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.fechaActual = `${yyyy}-${mm}-${dd}`;

    const data = localStorage.getItem('reservas');
    if (data) {
      this.datosGuardados = JSON.parse(data);
    }
  }

  enviar(form: any) {
    if (form.invalid) return;

    const nuevaReserva = {
      nombre: this.nombre,
      especialidad: this.especialidad,
      fecha: this.fecha
    };

    this.datosGuardados.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(this.datosGuardados));

    this.nombre = '';
    this.especialidad = '';
    this.fecha = '';
    form.resetForm();
  }

  eliminarReserva(index: number) {
    this.datosGuardados.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(this.datosGuardados));
  }
}
