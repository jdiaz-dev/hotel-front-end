import {
    Component,
    OnInit,
    AfterViewInit,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Renderer2,
} from '@angular/core';

import { StateUserService } from 'src/app/shared/services/state-user.service';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-user-logout',
    templateUrl: './user-logout.component.html',
    styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit, AfterViewInit {
    @ViewChild('closeSessionButton') closeSessionButton?: ElementRef;
    @ViewChild('logoLogout') logoLogout?: ElementRef;
    @ViewChild('pathSvgLogout') pathSvgLogout?: ElementRef;

    showbuttonAdded: boolean = false;

    constructor(
        private stateUserService: StateUserService,
        private stateCashService: StateCashService,
        private router: Router,
        private cookieService: CookieService,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {}
    ngAfterViewInit() {
        //console.log(this.closeSessionButton?.nativeElement);
    }
    sendLogout() {
        this.stateUserService.removeUserFromLocalStorage();
        this.stateCashService.removeCashFromLocalStorage();
        this.router.navigate(['/login']);
        this.cookieService.delete('token', '/');
    }
    showCloseSesionButton() {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (e.target == this.logoLogout?.nativeElement || e.target == this.pathSvgLogout?.nativeElement) {
                this.closeSessionButton?.nativeElement.classList.add('showButton');
                this.showbuttonAdded = true;
                this.checkClickOutsideOfLogoutButton();
            } else {
                this.closeSessionButton?.nativeElement.classList.remove('showButton');
                this.showbuttonAdded = false;
            }
        });
    }
    checkClickOutsideOfLogoutButton() {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (e.target !== this.logoLogout?.nativeElement) {
                this.closeSessionButton?.nativeElement.classList.remove('showButton');
                this.showbuttonAdded = false;
            }
        });
    }
}
