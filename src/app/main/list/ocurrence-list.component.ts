import { Component } from '@angular/core';
import { Ocurrence } from 'src/app/models/ocurrence.model';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocurrence-list',
  templateUrl: './ocurrence-list.component.html',
  styleUrls: ['./ocurrence-list.component.scss']
})
export class OcurrenceListComponent {

  ocurrences: Ocurrence[];

  constructor(public storageService: StorageService, public router: Router) {}

  ngOnInit() {
    this.ocurrences = this.storageService.getOcurrences();
  }

  goToForm(id: number) {
    this.router.navigateByUrl(`ocorrencia/form/${id}`);
  }
}
