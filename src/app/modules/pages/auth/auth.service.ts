import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthService {
    constructor(public storage: Storage) {}

    checkPassword(user){
        return this.storage.get(user.email);
    }
}