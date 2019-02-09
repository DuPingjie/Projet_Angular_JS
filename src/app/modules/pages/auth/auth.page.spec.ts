import {AuthPage} from "./auth.page";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Storage} from "@ionic/storage";
import createMockInstance from "jest-create-mock-instance";
import {AuthService} from './auth.service';
import { User } from "../../user";

describe('Page: Auth Page', () => {
  let page: AuthPage;

  let router: Router = createMockInstance(Router);
  let authService: AuthService=createMockInstance(AuthService);
  let storage: Storage = createMockInstance(Storage);
  beforeEach(()=> {
      page = new AuthPage(authService,router,storage);
      spyOn(router, "navigateByUrl");

    }
  );

  it('should onSignup', () => {
    page.onSignup();
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith("/register");

  });
});
