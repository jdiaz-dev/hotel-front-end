import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { StateUserService } from 'src/app/shared/services/state-user.service';
import { AccessData } from '../../shared/interfaces/access.data.interface';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private stateUserService: StateUserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }
  loginUser(form: any) {
    const data = new UserModel(this.userData.value.email, this.userData.value.password)

    this.userService.login(data).subscribe((response: AccessData) => {

      if (response) {
        this.stateUserService.saveUserLocalStorage(response)
        this.router.navigate(['/menu'])
      }
    })

  }
  get userForm() {
    return this.userData.controls
  }

}

