import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {Location} from "@angular/common";
import {MainService} from './main.service';

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  host: {'class': 'main'},
  providers: [MainService]
})
export class MainPage implements OnInit {
  public titles: Array<string> = new Array();

  constructor(public router: Router, private _location: Location, public mainService: MainService) {
  }

  ngOnInit() {
    console.log("INIT MAIN PAGE");
    for(var i=0; i<localStorage.length; i++)
      this.titles.push(localStorage.key(i));
        /*
        this.page1Service.persistArticles(data).then(
          ok => {
            console.log("Les articles ont bien été stockés");
          }
        */
  }

  goToPage1(): void{
    this.router.navigateByUrl("page1");
  }

  back(): void{
    this._location.back();
  }

  supprimerTous(): void{
    this.mainService.deleteAll();
  }

  supprimerArticle(title): void{
    this.mainService.deleteArticle(title);
  }

  Persister(title){
    return localStorage.getItem(title) == null? false:true;
  }

  localStorageNull(){
    return localStorage.length<=0? false:true;
  }
}

