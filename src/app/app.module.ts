import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DebounceComponent } from './layout/debounce/debounce.component';
import { ThrottleComponent } from './layout/throttle/throttle.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DebounceComponent,
    ThrottleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
