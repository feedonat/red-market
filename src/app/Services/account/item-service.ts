import { HttpClient } from "@angular/common/http";
import { Injectable, PLATFORM_ID } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ItemService {
 
constructor(
  private http: HttpClient
) { }

getItems():Observable<any> {
    return this.http.get<any>('./assets/sample-data/item/items.json');
        }
     
        getSellerItems():Observable<any> {
          return this.http.get<any>('./assets/sample-data/item/items.json');
              }
        getOneItem():Observable<any> {
            return this.http.get<any>('./assets/sample-data/item/single-item.json');
                }

}