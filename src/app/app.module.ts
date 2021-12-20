import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameGridComponent } from './game-grid/game-grid.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GameGridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
