import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteViewComponent } from './route-view/route-view.component';
import { RouteItemComponent } from './route-item/route-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteViewComponent,
    RouteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
