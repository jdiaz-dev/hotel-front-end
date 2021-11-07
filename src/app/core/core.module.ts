import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './infraestructure/in/components/login-user/login-user.component';
import { UserLogoutComponent } from './infraestructure/in/components/user-logout/user-logout.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [LoginUserComponent, UserLogoutComponent],
    imports: [CommonModule, CoreRoutingModule, FormsModule, ReactiveFormsModule, MatButtonModule],
    exports: [UserLogoutComponent],
})
export class CoreModule {}
