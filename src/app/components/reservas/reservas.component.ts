import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class Reservas {


  reserva = {

    nombre:'',
    especialidad:'',
    fecha:''

  };


  reservas:any[]=[];


  ngOnInit(){

    this.cargar();

  }


  guardar(){

    this.reservas.push({...this.reserva});


    localStorage.setItem(
      'reservas',
      JSON.stringify(this.reservas)
    );


    this.reserva = {

      nombre:'',
      especialidad:'',
      fecha:''

    };

  }


  cargar(){

    const datos = localStorage.getItem('reservas');


    if(datos){

      this.reservas = JSON.parse(datos);

    }

  }


}
