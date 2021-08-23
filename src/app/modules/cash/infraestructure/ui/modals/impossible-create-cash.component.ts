import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-impossible-create-cash',
  templateUrl: './impossible-create-cash.component.html',
  styleUrls: ['./impossible-create-cash.component.scss']
})
export class ImpossibleCreateCashComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

}
