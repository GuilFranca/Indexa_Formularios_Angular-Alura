import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "@gmail.com"},
  ]

  constructor() { 

    //Tentar obter os dados do local storage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    // JSON.pase transforma as strings em objetos
    const contatosLocalStorage = 
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    // Recebe contatosLocalStorage ou nulo, caso não tenha nada
    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }

    // Salvar os contatos no local storage
    // stringify transforma o objeto em string pro local storage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

  }

  obterContatos() {
    return this.contatos;
  }
  
  salvarContato(contato: Contato) {
    // Adiciona o novo contato na lista contatos
    this.contatos.push(contato);
    // Adiciona a nova lista de contatos no localStorage transformando a lista de contatos em string
    localStorage.setItem('contatos', JSON.stringify(this.contatos))
  }

}
