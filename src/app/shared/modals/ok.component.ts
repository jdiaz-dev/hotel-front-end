import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOkComponentConfig } from '../interfaces/ok-component-config/ok-component-config.interface';
import { OkService } from './../services/communication/ok.service';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.scss'],
})
export class OkComponent implements OnInit {
  constructor(private okService: OkService, @Inject(MAT_DIALOG_DATA) public data: IOkComponentConfig) {}

  ngOnInit(): void {}
  okButtonActived() {
    this.okService.confirmUserSaved();
  }
}
