import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";


@Injectable()
export class RegisterService {
    constructor(public storage: Storage) {}

    persistAccount(user){
        return this.storage.set(user.email, user.password);
    }
}