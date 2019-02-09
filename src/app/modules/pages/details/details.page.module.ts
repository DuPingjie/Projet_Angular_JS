import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DetailsPage} from "./details.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'detail/:id',
        component: DetailsPage
      }
    ])
  ],
  bootstrap: [DetailsPage],
  declarations: [DetailsPage]
})

export class DetailsPageModule {
}
