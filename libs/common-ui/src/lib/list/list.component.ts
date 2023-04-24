import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListElement } from '../models/list-element.model';

@Component({
  selector: 'monorepo-test-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [NgFor]
})

export class ListComponent {

  @Input() elements: ListElement[] | null = [];
  @Input() title: string = '';
  @Output() onElementClick: EventEmitter<ListElement> = new EventEmitter<ListElement>();

  onClickElement(element: ListElement){
    this.onElementClick.emit(element);
  }

}
