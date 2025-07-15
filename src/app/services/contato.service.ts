import { Injectable } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 4, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 5, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 6, "nome": "Carlos", "telefone": "94 543197849"},
    {"id": 7, "nome": "Cláudia", "telefone": "31 176437098"},
  ]

  constructor() { 

    //Tentar obter os dados do local storage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    // JSON.pase transforma as strings em objetos
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    // Recebe contatosLocalStorage ou nulo, caso não tenha nada
    this.contatos = contatosLocalStorage || null;

    // Salvar os contatos no local storage
    // stringify transforma o objeto em string pro local storage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

  }

  obterContatos() {
    return this.contatos
  }
  
}
