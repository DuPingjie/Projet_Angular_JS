import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../modules/pages/auth/router-guard.service';

const defaultsRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: '../modules/main/main.page.module#MainPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'page1',
    loadChildren: '../modules/pages/page1/page1.page.module#Page1PageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: '../modules/pages/auth/auth.page.module#AuthPageModule'
  },
  {
    path: 'register',
    loadChildren: '../modules/pages/register/register.page.module#RegisterPageModule'
  },
  {
    path: 'details',
    loadChildren: '../modules/pages/details/details.page.module#DetailsPageModule',
    canActivate: [AuthGuard]
  }
];

const concatRoutes: Routes = [...defaultsRoutes] as Routes;

@NgModule({
  imports: [
    RouterModule.forRoot(concatRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule {
}
