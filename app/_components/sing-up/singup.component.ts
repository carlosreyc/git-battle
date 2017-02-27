import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.css'],
    providers: [UserService]
})
export class SingUp {
    user: any = {}
    constructor(private router: Router,
                private userService: UserService) { }

   register() {
        this.userService.create(this.user)
            .subscribe(
                data => {
                    alert('Registration completed')
                    setTimeout(() => {
                        this.router.navigate(['/login']);
                    },1000)
                    
                });
    }
}
