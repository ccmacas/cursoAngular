import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "HolaMundo";
  toogle = true;
  listEstudiantes: any[] = [
    { nombre: "Cisne Cabrera", estado: 'No Aprobado' },
    { nombre: "Maria Armijos", estado: 'Aprobado' },
    { nombre: "Martin Perez", estado:  'No Aprobado' },
  ];

}
