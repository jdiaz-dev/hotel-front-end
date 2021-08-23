import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { StateUserService } from 'src/app/shared/services/state-user.service';
import { DataUser } from '../../../../shared/interfaces/data-user.interface';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../out/users.service';
import { StateCashService } from 'src/app/shared/services/state-cash.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  userData!: FormGroup

  constructor(
    private readonly userService: UsersService,
    private readonly stateUserService: StateUserService,
    private readonly stateCashService: StateCashService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.userData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }
  async loginUser(form: any) {
    const data = new UserModel(this.userData.value.email, this.userData.value.password)

    const dataUser: DataUser = await this.userService.login(data).toPromise()
    this.saveDataLoginUser(dataUser)

  }
  private async saveDataLoginUser(dataUser: DataUser) {
    if (dataUser !== null) {
      this.stateUserService.saveUserLocalStorage(dataUser)
      this.stateCashService.loadCashOpened()
      this.router.navigate(['/menu'])
    }
  }

  get userForm() {
    return this.userData.controls
  }

}




