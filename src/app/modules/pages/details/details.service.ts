import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DetailsService {

  constructor(public httpclient: HttpClient) {

  }

  getArticles(id){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/"+id);
  }


}
