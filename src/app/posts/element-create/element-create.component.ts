import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Element {
  key: string;
  value2: string;
}


@Component({
  selector: 'app-element-create',
  templateUrl: './element-create.component.html',
  styleUrls: ['./element-create.component.css']
})
export class ElementCreateComponent {

  element: Element;

  @Output() elementCreated = new EventEmitter<Element>();

  constructor() {
    this.element = {} as Element;
   }

  // tslint:disable-next-line: typedef
  onAddElement(){

    const element = {
      key: this.element.key,
      value2: this.element.value2
    };

    console.log('valores');
    console.log(element);

    this.elementCreated.emit(element);
  }

}
