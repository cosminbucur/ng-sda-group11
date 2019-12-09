import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childInput: string;
  @Output() childOutputEvent = new EventEmitter<string>();

  public childReply = 'ok fine!';

  constructor() { }

  ngOnInit() {
  }

  public childEmitOutput() {
    console.log('child emit output');
    this.childOutputEvent.emit(this.childReply);
  }


}
