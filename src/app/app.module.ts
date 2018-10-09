import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TagGeneratorComponent } from './tag-generator/tag-generator.component';
import { AnimateDirective } from './animate.directive';
import { ChipComponent } from './chip/chip.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CardComponent,
    TagGeneratorComponent,
    AnimateDirective,
    IconComponent,
    ChipComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
