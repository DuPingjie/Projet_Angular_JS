import {Component, OnInit} from "@angular/core";
import {DetailsService} from "./details.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  //host: {'class': 'details'},
  providers: [DetailsService]
})
export class DetailsPage implements OnInit {

  public article: any;
  public Error: boolean;
  public id: any;

  constructor(public detailsService: DetailsService, public _location: Location,public activeRoute: ActivatedRoute) {
    this.Error = false;
  }

  ngOnInit() {
    //  console.log("INIT DETAILS");

    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.detailsService.getArticles(this.id).subscribe(

      params => {
        this.article = params;
      }
    );
  }

  back(){
    this._location.back();
  }

}

