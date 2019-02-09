import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthPage} from "./auth.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthPage
      }
    ])
  ],
  bootstrap: [AuthPage],
  declarations: [AuthPage]
})
export class AuthPageModule {
}