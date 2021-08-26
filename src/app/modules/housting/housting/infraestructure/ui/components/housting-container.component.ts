import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';

@Component({
  selector: 'app-housting-container',
  templateUrl: './housting-container.component.html',
  styleUrls: ['./housting-container.component.scss']
})
export class HoustingContainerComponent implements OnInit {
  clientFormValid!: boolean
  houstingFormValid!: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RoomData,
    private formsValidForHoustingService: FormsValidForHoustingService,

  ) { }

  ngOnInit(): void {
    this.clientFormValid = false
    this.houstingFormValid = false
    this.checkIfFormClientIsValid()
    this.checkIfFormHoustingIsValid()
  }
  checkIfFormClientIsValid() {
    this.formsValidForHoustingService.formClientValid$.subscribe((full: boolean) => {
      if (full) this.clientFormValid = true
    })
  }
  checkIfFormHoustingIsValid() {
    this.formsValidForHoustingService.formHoustingValid$.subscribe((full: boolean) => {
      if (full) this.houstingFormValid = true
    })
  }

}
