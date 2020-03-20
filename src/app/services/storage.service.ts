import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';
import { Usuario } from '../models/user.model';
import { Ocurrence } from '../models/ocurrence.model';

const USER = 'User';
const REGISTERED_USERS = 'ListUsers';
const OCURRENCES = 'Ocurrences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  public signOut() {
    window.localStorage.removeItem(USER);
  }

  public signIn(credentials: Credentials): boolean {
    let retorno = false;
    let usuarios: Usuario[] = JSON.parse(window.localStorage.getItem(REGISTERED_USERS));
    if(!usuarios) usuarios = [];
    usuarios.filter(user => {
      if(user.email === credentials.email && user.password === credentials.password) {
        window.localStorage.setItem(USER, JSON.stringify(user));
        retorno = true;
      }
    });
    if (!retorno) alert('usuário não cadastrado no sistema!');
    return retorno;
  }

  public saveUser(user: Usuario): boolean {
    let retorno = true;
    let usuarios:Usuario[] = JSON.parse(window.localStorage.getItem(REGISTERED_USERS));
    if(!usuarios) usuarios = [];
    usuarios.filter(u => {
      if(user.email === u.email) {
        alert('email já cadastrado no sistema!');
        retorno = false;
      }
    });
    if(retorno) {
      usuarios.push(user);
      window.localStorage.setItem(REGISTERED_USERS, JSON.stringify(usuarios));
      alert('usuário cadastrado com sucesso!');
    }
    return retorno;
  }

  public saveOcurrence(ocurrence: Ocurrence) {
    let ocorrencias:Ocurrence[] = JSON.parse(window.localStorage.getItem(OCURRENCES));
    if(!ocorrencias) ocorrencias = [];
    ocorrencias.push(ocurrence);
    window.localStorage.setItem(OCURRENCES, JSON.stringify(ocorrencias));
    alert('ocorrência cadastrada com sucesso!');
  }

  public getLoggedUser(): Usuario {
    return JSON.parse(localStorage.getItem(USER)) as Usuario;
  }

  public getOcurrences(): Ocurrence[] {
    let ocorrencias = JSON.parse(localStorage.getItem(OCURRENCES));
    if(!ocorrencias) ocorrencias = [];
    return ocorrencias as Ocurrence[];
  }

  getOcurrenceById(id: number) : Ocurrence {
    let ocorrencias = JSON.parse(localStorage.getItem(OCURRENCES));
    return ocorrencias.filter(ocorrencia => ocorrencia.id == id)[0];
  }
}