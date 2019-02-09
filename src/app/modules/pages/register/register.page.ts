import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { RegisterService } from './register.service'

@Component({
    selector: 'register',
    templateUrl: './register.page.html',
    host: {'class': 'register'},
    providers: [RegisterService]
})

export class RegisterPage implements OnInit{
    user: User = new User();
    constructor(private router: Router, private registerService: RegisterService) {}
    onRegister(): void{
        this.registerService.persistAccount(this.user)
        .then( ok => console.log('Create account successfully!'));
        this.router.navigateByUrl('/auth');
    }
    ngOnInit(): void {
        ;
    }
}