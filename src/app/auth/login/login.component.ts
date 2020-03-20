import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Credentials } from 'src/app/models/credentials.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(public fb: FormBuilder, 
    public storageService: StorageService,
    public router: Router) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    const credentials = this.form.value as Credentials;
    const login = this.storageService.signIn(credentials);
    if (login) {
      this.router.navigate(['ocorrencia/list']);
    }
  }
}
