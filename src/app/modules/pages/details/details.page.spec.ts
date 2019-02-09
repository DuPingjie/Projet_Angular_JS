import {DetailsPage} from "./details.page";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import createMockInstance from "jest-create-mock-instance";
import {DetailsService} from './details.service';

describe('Page: Details Page', () => {
  let page: DetailsPage;

  let router: ActivatedRoute = createMockInstance(ActivatedRoute);
  let location: Location=createMockInstance(Location);
  let detailsService: DetailsService=createMockInstance(DetailsService);

  beforeEach(()=> {
      page = new DetailsPage(detailsService,location,router);
    }
  );

  it('should back', () => {
    page.back();
    expect(location.back).toHaveBeenCalledTimes(1);

  });
  
});
