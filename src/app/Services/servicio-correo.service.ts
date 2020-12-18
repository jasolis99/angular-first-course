import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioCorreoService {

  message: string;
  visible: boolean;

  constructor() {
    this.message = "";
    this.visible = false
   }

  ngOnInit(): void {
    this.showMessage('Correo enviado')
  }
  showMessage(message: string){
    this.message = message;
    this.visible = true;
    this.waitToHide();
    
  }
  hideMessage(){
    this.visible = false;
    this.message = '';
  }
  waitToHide(){
    setTimeout(() => {
      this.hideMessage()
    }, 2000);
  }
}
