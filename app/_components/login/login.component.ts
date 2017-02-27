import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from '../../_services/auth.service';
import { SingUp } from '../sing-up/singup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: any = {};
    
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

    ngOnInit() {
        
        this.authenticationService.logout();

        
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                    this.router.navigate(['/players']);
                });
    }

    goToSingUp() {
        this.router.navigate(['/singup'])
    }
}
