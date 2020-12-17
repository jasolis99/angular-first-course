import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
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

    alert('Correo enviado \n Eliminamos el formulario')

    this.onReset();
  }

  onReset(){
    this.submitted = false;
    this.nuevoCorreo.reset()
    this.accionRealizada.emit();
  }

}
