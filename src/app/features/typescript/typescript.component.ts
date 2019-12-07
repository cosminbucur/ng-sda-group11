import { Component, OnInit } from '@angular/core';
import { DemoLet } from './let';
import { DemoConst } from './const';
import { DemoVariables } from './variables';
import { DemoStrings } from './strings';
import { DemoFatArrow } from './fat-arrow';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoIteration } from './iteration';
import { DemoMaps } from './maps';
import { DemoSets } from './set';
import { DemoEnums } from './enum/enums';
import { DemoPromisses } from './promises';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {

  constructor() {
    // const demoLet: DemoLet = new DemoLet();
    // demoLet.testLocalVariables();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoString: DemoStrings = new DemoStrings();
    // demoString.templateString();
    // demoString.variableSubstitution();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    // demoDestructuring.objectDestructuring();


    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInArray();
    // demoIteration.testForInObject();
    // demoIteration.testForOf();

    // const demoMaps: DemoMaps = new DemoMaps();
    // demoMaps.testMap();

    // const demoSets: DemoSets = new DemoSets();
    // demoSets.testSets();

    // const demoEnums: DemoEnums = new DemoEnums();
    // demoEnums.iterateEnum();
    // demoEnums.getKeysOfStringEnum();
    // demoEnums.iterateEnumKeys();

    // const demoPromisses: DemoPromisses = new DemoPromisses();
    // demoPromisses.testSuccessPromise();
    // demoPromisses.testErrorPromise();
    // demoPromisses.promiseChainability();
    // demoPromisses.promiseErrorHandling();
    // demoPromisses.promiseInTypescript();
  }


}
