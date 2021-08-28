import { Component, OnInit } from '@angular/core';
import { ReceptionModeService } from '../services/reception-mode.service';

@Component({
  selector: 'app-reception-container',
  templateUrl: './reception-container.component.html',
  styleUrls: ['./reception-container.component.scss'],
  providers: [ReceptionModeService]
})
export class ReceptionContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
