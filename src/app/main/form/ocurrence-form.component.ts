import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/user.model';
import { Ocurrence } from 'src/app/models/ocurrence.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ocurrence-form',
  templateUrl: './ocurrence-form.component.html',
  styleUrls: ['./ocurrence-form.component.scss']
})
export class OcurrenceFormComponent {

  form: FormGroup;
  ocorrencia: Ocurrence;

  constructor(public fb: FormBuilder, 
    public storageService: StorageService, 
    public route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(e=>{
      if(e.id){
        this.ocorrencia = this.storageService.getOcurrenceById(e.id);
      }
    });

    this.form = this.fb.group({
      title: [this.ocorrencia ? this.ocorrencia.title : '', [Validators.required]],
      description: [this.ocorrencia ? this.ocorrencia.description : '', [Validators.required]],
      user: [this.ocorrencia ? this.ocorrencia.user : this.storageService.getLoggedUser(), [Validators.required]],
      date: [new Date(), [Validators.required]],
      evidencias: [this.ocorrencia ? this.ocorrencia.evidencias : '', [Validators.required]]
    });
  }

  cadastrar() {
    const ocurrence = this.form.value as Ocurrence;
    ocurrence.id = this.storageService.getOcurrences().length + 1;
    this.storageService.saveOcurrence(ocurrence);
  }
}
