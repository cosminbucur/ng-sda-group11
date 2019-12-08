import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  public message = 'hello';
  public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  public myNumber = 12;
  
  constructor() { }

  ngOnInit() {
  }

}
