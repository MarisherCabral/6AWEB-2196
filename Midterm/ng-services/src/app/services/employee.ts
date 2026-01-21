import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
    getEmployees() {
    return [
    { id: 101, firstname: 'Marisher',  lastname:'Cabral', email: 'cabralmarisher@gmail.com', },
    { id: 102, firstname: 'JJ',  lastname:'Gales', email: 'jjgales@gmail.com', },
    { id: 103, firstname: 'Fel',  lastname:'Cabral', email: 'fel@gmail.com', },
    { id: 104, firstname: 'Gelene',  lastname:'Guiao', email: 'gelene@gmail.com', },
    ];
  }
}
