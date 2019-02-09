import {DetailsService} from "./details.service";
import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";


describe('Service: Page Service', () => {
  let service: DetailsService;
  let httpClient: HttpClient = createMockInstance(HttpClient);

  let mock = {
    title: "titre",
    body: "body",
    id: "id",
    userId: "userId"
  };

  beforeEach(()=> {
      httpClient = createMockInstance(HttpClient);
      service = new DetailsService(httpClient);

      spyOn(service, "getArticles").and.returnValue(of(mock));

      spyOn(httpClient, "get").and.returnValue(of(mock));


    }
  );

  it('should getArticle', (done) => {
    service.getArticles('1').subscribe(
      data => {
        expect(data).toEqual(mock);
        done();
      },
      error =>{
        fail(error);
      }
    );
  });

});
