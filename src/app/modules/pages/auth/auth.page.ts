import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../../user';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
    selector: 'auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
    host: {'class': 'auth'},
    providers: [AuthService]
})

export class AuthPage implements OnInit{
    user: User = new User();
    constructor(private auth: AuthService, private router: Router, public storage: Storage) {
        this.user.email='';
        this.user.password='';
    }
    onLogin(): void{
        this.auth.checkPassword(this.user)
        .then((password) => {
            if(this.user.password!='' && this.user.password==password){
                console.log('ok.');
                this.storage.set("loggedIn",true);
                this.router.navigateByUrl('/main');
            }
            else
                console.log('Pwd or Email error!');
        })        
    }
    onSignup(): void{
        this.router.navigateByUrl('/register');
    }
    ngOnInit(): void {
        ;
    }
}