import {Page1Page} from "./page1.page";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

import createMockInstance from "jest-create-mock-instance";
import {Page1Service} from './page1.service';

describe('Page: Page1 Page', () => {
  let page: Page1Page;

  let router: Router = createMockInstance(Router);
  let location: Location=createMockInstance(Location);
  let page1Service: Page1Service=createMockInstance(Page1Service);
  beforeEach(()=> {
      page = new Page1Page(page1Service,location,router);
      spyOn(router, "navigate");
    }
  );

  it('should details', () => {
    page.details('1');
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(["/details/detail", "1"]);

  });

});
