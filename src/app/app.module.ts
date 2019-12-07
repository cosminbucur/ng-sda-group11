import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
