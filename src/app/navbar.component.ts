import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { Usuario } from './models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: Usuario;
  
  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit(){
    this.user = this.storageService.getLoggedUser();
  }

  logout(){
    this.storageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
