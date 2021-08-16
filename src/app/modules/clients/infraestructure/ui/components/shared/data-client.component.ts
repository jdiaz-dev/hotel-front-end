import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { ClientModel } from '../../models/client.model';
import { ClientsService } from './../../../out/clients.service';

@Component({
  selector: 'app-data-client',
  templateUrl: './data-client.component.html',
  styleUrls: ['./data-client.component.scss']
})
export class DataClientComponent implements OnInit {
  clientData!: FormGroup
  client: ClientModel = new ClientModel(null, '', '', '')
  constructor(
    private formBuilder: FormBuilder,
    private readonly clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.clientData = this.formBuilder.group({
      dni: ['', [Validators.maxLength(8), Validators.pattern(REG_EXP.numeric)]],
      names: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
      surnames: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
      visitReason: ['', [Validators.maxLength(60), Validators.pattern(REG_EXP.alphanumeric)]],
    })
  }
  get clientControl() {
    return this.clientData.controls
  }
  saveClient() {
    this.clientsService.createClient(this.clientData.value).subscribe(response => {
      console.log(response)
    })
  }
}
