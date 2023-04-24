import { Component } from "@angular/core";
import { CommonUiModule, ListElement } from "@monorepo-test/common-ui";
import { ListService } from "./services/list.service";
import { Observable, map } from 'rxjs'
import { AsyncPipe } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonUiModule, AsyncPipe],
  selector: "monorepo-test-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  toBuyList$: Observable<ListElement[]>;
  BoughtList$: Observable<ListElement[]>;

  constructor(private listService: ListService) {
    this.toBuyList$ = listService.list$.pipe(map(list => {
      return list.filter(listElement => !listElement.checked);
    }))
    this.BoughtList$ = listService.list$.pipe(map(list => {
      return list.filter(listElement => listElement.checked);
    }))
  }

  changeCheckedStatus(element: ListElement){
    const listUpdated: ListElement[] = this.listService._list.value.map(listElement => {
      if(element.id === listElement.id) listElement.checked = !listElement.checked; 
      return listElement
    })
    this.listService._list.next(listUpdated);
  }

}
