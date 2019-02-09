import {MainPage} from "./main.page";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

import createMockInstance from "jest-create-mock-instance";
import {MainService} from './main.service';

describe('Page: Main Page', () => {
  let page: MainPage;

  let router: Router = createMockInstance(Router);
  let location: Location=createMockInstance(Location);
  let mainService: MainService=createMockInstance(MainService);

  beforeEach(()=> {
      page = new MainPage(router,location,mainService);
      spyOn(router, "navigateByUrl");
    }
  );

  it('should goToPage1', () => {
    page.goToPage1();
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith("page1");

  });
  it('should supprimerTous', () => {
    page.supprimerTous();
    expect(mainService.deleteAll).toHaveBeenCalledTimes(1);
  });
  it('should localStorageNull', () => {
    let testLS=page.localStorageNull();
    expect(mainService.deleteAll).toHaveBeenCalledTimes(1);
    expect(testLS).toEqual(true);
  });
});
