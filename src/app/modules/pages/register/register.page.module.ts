import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RegisterPage} from "./register.page";
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
        component: RegisterPage
      }
    ])
  ],
  bootstrap: [RegisterPage],
  declarations: [RegisterPage]
})

export class RegisterPageModule {
}