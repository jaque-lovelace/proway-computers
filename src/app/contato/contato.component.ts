import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formContato = this.fb.group({
    nome: [ "", [ 
      Validators.minLength(4),
      Validators.required, 
    ]],

    assunto: [ "", [
      Validators.minLength(10),
      Validators.required
    ]],

    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],

    email: ["", [
      Validators.email,
      Validators.required
    ]],

    mensagem: ["", [
      Validators.minLength(20),
      Validators.maxLength(300),
      Validators.required
    ]],

  })
  constructor(
    private fb: FormBuilder
    )
  {

  }

    enviarFormulario()
    {
      alert("Recebemos a sua mensagem e retornaremos assim que possível!")
      this.formContato. reset()
    }
}
