import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ServicioCorreoService} from 'src/app/Services/servicio-correo.service'

@Component({
  selector: 'app-nuevo-correo-component',
  templateUrl: './nuevo-correo-component.component.html',
  styleUrls: ['./nuevo-correo-component.component.css']
})
export class NuevoCorreoComponentComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;
  @Input() correo: any;
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private servicioAvisos: ServicioCorreoService) {
    this.nuevoCorreo = this.formBuilder.group({
      title:['',[Validators.required,Validators.minLength(3)]],
      body:['',[Validators.required,Validators.minLength(10)]],
      to:['',[Validators.required,Validators.email]],
    });
   }

  ngOnInit(): void {
    if(this.correo!= undefined){
      console.log("A", this.correo);
      this.nuevoCorreo.patchValue({
        title: 'Re:' + this.correo.titulo,
        to: this.correo.emisor
      })
    }
  }
  get formulario(){return this.nuevoCorreo.controls}

  onSubmit(){
    this.submitted = true;

    if(this.nuevoCorreo.invalid){
      return;
    }

    let mail = this.nuevoCorreo.value;
    mail.readed = false;
    mail.from = 'correoEmisor1@openwebinar.inv';

    this.onReset();
    this.servicioAvisos.showMessage('Correo enviado a '+mail.from)
  }

  onReset(){
    this.submitted = false;
    this.nuevoCorreo.reset()
    this.accionRealizada.emit();
  }
  
  cancel(){
    this.onReset();
    this.servicioAvisos.showMessage('Envío cancelado')
  }

}
