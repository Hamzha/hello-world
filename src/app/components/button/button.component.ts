import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() text: string | undefined;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter

  constructor() { }
 

  onClick() {
    console.log('clicked')
    this.btnClick.emit()
  }

}
