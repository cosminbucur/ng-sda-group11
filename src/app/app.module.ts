import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { ZeroPaddingPipe } from './shared/pipes/zero-padding.pipe';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
  
@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    DataBindingComponent,
    EventBindingComponent,
    BuiltInDirectivesComponent,
    CustomPipesComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
  ],
  imports: [
  CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
