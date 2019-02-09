import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";


@Injectable()
export class Page1Service {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }

  persistArticle(article){
    localStorage.setItem(article.title, article.body);
    return true;
  }

}
