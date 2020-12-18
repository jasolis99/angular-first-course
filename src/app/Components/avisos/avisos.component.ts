import { Component, OnInit } from '@angular/core';
import { ServicioCorreoService } from 'src/app/Services/servicio-correo.service';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  constructor(public servicioAvisos:ServicioCorreoService){

  }
  ngOnInit(): void {
    
  }


}
