import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';

// import agenda from '../../agenda.json';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtroPorTexto : string = '';

  // O construtor fica responsável apenas pela injeção de depêndencias
  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos()
  }

  filtrarContatosPorTexto(): Contato[] {

    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().normalize("NFD").includes(this.filtroPorTexto.toLowerCase())
    }) 

  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().normalize("NFD").startsWith(letra)
    } )
  }
}
