import {Component, OnInit} from "@angular/core";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [],
})
export class AppComponent implements OnInit {

  constructor(public storage: Storage) {

  }

  ngOnInit() {
    this.storage.set("loggedIn",false);
  }
}
