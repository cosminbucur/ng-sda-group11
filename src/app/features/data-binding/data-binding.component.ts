import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public title = 'hello';
  public imageUrl = 'assets/images/code.png';

  constructor() { }

  ngOnInit() {
  }

}
