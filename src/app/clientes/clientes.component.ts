import { Component, OnInit } from '@angular/core';
import {Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  //inyección de dependencias desde el archivo cliente.service.ts
  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
   this.clienteService.getClientes().subscribe(
     clientes => this.clientes = clientes
   );  //rellena el arreglo Cliente de aquí con el json de clientes.json
  }

}
