import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  public onSave($event) {
    console.log('save button clicked', $event);
    this.clickCount += 1;
  }
}
