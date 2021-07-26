import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomMessage } from './custom-message.interface';

@Component({
  selector: 'app-confirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.scss']
})
export class ConfirmRemoveComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public customMessage: CustomMessage
  ) { }

  ngOnInit(): void {
  }

}
