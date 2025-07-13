import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from '../../agenda.json';
import { FormularioContatoComponent } from '../../paginas/formulario-contato/formulario-contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto : string = '';
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
