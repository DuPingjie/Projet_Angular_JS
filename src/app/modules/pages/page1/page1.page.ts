import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Location} from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;

  public Error: boolean;

  constructor(public page1Service: Page1Service, public _location: Location, private router: Router) {
    this.Error = false;
  }

  ngOnInit() {
    console.log("INIT PAGE1");

    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        if(data.length < 1 && localStorage.length < 1)
          this.Error = true;
        else{
          //localStorage.clear();
          this.articles = data.slice(0, 10);
        }
        /*
        this.page1Service.persistArticles(data).then(
          ok => {
            console.log("Les articles ont bien été stockés");
          }
        */
    });
  }

  back(){
    this._location.back();
  }

  Persister(title){
    return localStorage.getItem(title) == null? false:true;
  }

  supprimerArticle(title){
    localStorage.removeItem(title);
  }

  persisterArticle(article){
    this.page1Service.persistArticle(article);
  }

  details(id): void{
    this.router.navigate(['/details/detail',id]);
  }
}

