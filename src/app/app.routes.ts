import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormularioContatoComponent
    },
    {
        path: 'lista-contatos',
        component: ListaContatosComponent
    },
    {
        path: '',
        redirectTo: '/lista-contatos',
        // Quando o path está vazio é necessário ter o pathMatch
        // Roteador analisa o inicio da URL e qualquer um que tenha o host 4200 será utilizado
        // pathMatch: 'prefix'
        // Já o full analisa a URL por inteiro, que é o que precisamos
        pathMatch: 'full'
    }
];
