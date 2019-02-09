import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class MainService {

  constructor(public storage: Storage){}

  deleteAll(){
    localStorage.clear();
  }

  deleteArticle(title){
    localStorage.removeItem(title);
  }
}
