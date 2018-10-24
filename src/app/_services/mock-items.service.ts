import { Injectable } from '@angular/core';
import {item} from "../../_modelo/item";
import {Observable} from "rxjs";
import {AbstractItemsService} from './abstract-items.service';
@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
  items: item[];

  constructor() { 
  super();
  this.items=[ new item("comprar carne"),
                 new item("comprar verdura"),
                 new item("comprar carbon")
                ];
              }
getItems(): Observable<item[]> {
  return new Observable((obs) => {
    obs.next(this.items);
    obs.complete();
  });
};
remove(item: item): Observable<item[]>{
  return new Observable((obs) => {
  this.items= this.items.filter(it => it != item)
    obs.next(this.items);
    obs.complete();
  });
}; 
addItem(item: item): Observable<item[]>{
  return new Observable((obs) => {
  this.items.push(item);
    obs.next(this.items);
    obs.complete();
  });
};     
}
