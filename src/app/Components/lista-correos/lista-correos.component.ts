import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.css']
})
export class ListaCorreosComponent implements OnInit {

  listaCorreos: any[];
  answer: boolean;
  correoAResponder: any
  constructor() {
    this.listaCorreos = [{
        titulo:'Titulo del Primer Email',
        cuerpo: 'Cuerpo del email',
        emisor: 'correoEmisor@openWebinar.inv',
        receptor: 'correoReceptor@openWebinar.inv',
        leido: false
      },
      {
        titulo:'Titulo del Segundo Email',
        cuerpo: 'Cuerpo del email',
        emisor: 'correoEmisor@openWebinar.inv',
        receptor: 'correoReceptor@openWebinar.inv',
        leido: true
      },
      {
        titulo:'Titulo del Tercer Email',
        cuerpo: 'Cuerpo del email',
        emisor: 'correoEmisor@openWebinar.inv',
        receptor: 'correoReceptor@openWebinar.inv',
        leido: true
      },
      {
        titulo:'Titulo del Cuarto Email',
        cuerpo: 'Cuerpo del email',
        emisor: 'correoEmisor@openWebinar.inv',
        receptor: 'correoReceptor@openWebinar.inv',
        leido: true
      }
    ]
    this.answer = false

  }

  ngOnInit(): void {
  }
  clickResponder(correo: any){
    this.answer = !this.answer
    this.correoAResponder = correo
    correo.responder = !correo.responder
  }

  accionRespuestaRapida(correo: { responder: boolean; }){
    correo.responder = false
  }
}
