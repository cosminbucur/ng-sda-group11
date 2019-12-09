import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    // angular modules
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    MaterialModule,
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    MaterialModule,

    ZeroPaddingPipe,
  ],
  declarations: [ZeroPaddingPipe]
})
export class SharedModule { }
