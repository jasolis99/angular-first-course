import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {

    this.correo = {
      titulo:'Titulo del Email',
      cuerpo: 'Cuerpo del email',
      emisor: 'correoEmisor@openWebinar.inv',
      receptor: 'correoReceptor@openWebinar.inv',
    }
  }

  ngOnInit(): void {
  }

}
