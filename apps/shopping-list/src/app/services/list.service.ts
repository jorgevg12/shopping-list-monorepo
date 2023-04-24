import { Injectable } from '@angular/core';
import { ListElement } from '@monorepo-test/common-ui';
import { BehaviorSubject } from 'rxjs'

const list: ListElement[] = [
  new ListElement(0, 'tomato', false),
  new ListElement(1, 'onion', false),
  new ListElement(2, 'lettuce', false),
  new ListElement(3, 'cucumber', false)
]

@Injectable({
  providedIn: 'root'
})

export class ListService {

  _list: BehaviorSubject<ListElement[]> = new BehaviorSubject<ListElement[]>(list);
  list$ = this._list.asObservable();

}
