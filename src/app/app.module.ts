import { SafePipeComponent } from './safe-pipe/safe-pipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [AppComponent, IframeComponent, SafePipeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
