import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StateUserService } from 'src/app/shared/services/state-user.service';
import { DataUser } from '../../../../../shared/interfaces/user/data-user.interface';
import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../../out/users.service';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { CookieService } from 'ngx-cookie-service';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
import { MatDialog } from '@angular/material/dialog';
import { OkComponent } from 'src/app/shared/modals/ok.component';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
    userData!: FormGroup;

    constructor(
        private readonly userService: UsersService,
        private readonly stateUserService: StateUserService,
        private readonly stateCashService: StateCashService,
        private formBuilder: FormBuilder,
        private router: Router,
        private cookieService: CookieService,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.userData = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
        });
    }
    async loginUser(form: any) {
        const data = new UserModel(this.userData.value.email, this.userData.value.password);

        const dataUser: DataUser = await this.userService.login(data).toPromise();

        if (dataUser.token) {
            this.saveDataLoginUser(dataUser);

            this.cookieService.set('token', dataUser.token, 1, '/');
        } else {
            this.openDialogOk();
        }
    }
    private async saveDataLoginUser(dataUser: DataUser) {
        if (dataUser !== null) {
            this.stateUserService.saveUserLocalStorage(dataUser);
            this.stateCashService.loadCashOpened();
            this.router.navigate(['/menu']);
        }
    }
    private openDialogOk() {
        const config: IOkComponentConfig = {
            message: 'Porfavor verifica que tu correo y contraseña sean validos',
            useMethodsOkComponent: true,
        };
        let dialogRef = this.dialog.open(OkComponent, { data: config, width: '25%' });
    }
    get userForm() {
        return this.userData.controls;
    }
}
