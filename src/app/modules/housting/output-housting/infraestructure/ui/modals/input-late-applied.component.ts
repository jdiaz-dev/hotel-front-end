import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';

@Component({
    selector: 'app-input-late-applied',
    templateUrl: './input-late-applied.component.html',
    styleUrls: ['./input-late-applied.component.scss'],
})
export class InputLateAppliedComponent implements OnInit {
    @Output() lateApplied = new EventEmitter<number>();
    late: number = 0;
    lateAppliedData = new FormControl('', [
        Validators.required,
        Validators.pattern(REG_EXP.numeric),
        Validators.maxLength(4),
    ]);
    constructor() {}

    ngOnInit(): void {}
    sendLateApplied() {
        if (this.lateAppliedData.valid) this.lateApplied.emit(this.lateAppliedData.value);
    }
}
