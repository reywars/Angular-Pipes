import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Yarima';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Fernando';
    this.gender = 'male'
  }

  //i18nPlural
  public clients: string[] = ['Maria','Eduardo','Pedro','Fernando','Eduardo','Natalia','Melissa','Yarima','Alejandro','Hernando'];
  public clientsMap = {
    '=0':'no tenemos clientes esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  public hideButton: boolean = false;

  deleteClient(): void {
    this.clients.shift();
    if(this.clients.length === 0) this.hideButton = true;
  }

  //KeyValue pipe
  public person = {
    name:'Yarima',
    age: 41,
    address: 'Madrid, España'
  }

  //AsyncPipe
  public myObservabletimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap:', value ))
  );

  public promiseValue: Promise<string> = new Promise( ( resolve, rejects ) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })
}
