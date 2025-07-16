import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {

  // Agrupamento de campos que irá gerar um formulário
  contatoForm!: FormGroup;

  // Injeção do ContatoService para salvar novo contato
  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inicializarFormulário();
  }

  inicializarFormulário() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
    // Reseta os campos do formulário
    this.contatoForm.reset()
    // Leva a página de formulário para a de listagem de contatos após
    this.router.navigateByUrl('/lista-contatos');
  }

  cancelar() {
    // Reseta os campos do formulário
    this.contatoForm.reset()
  }

}
