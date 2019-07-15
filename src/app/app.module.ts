import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GearComponent } from './gear/gear.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { SetViewComponent } from './set-view/set-view.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MaterialComponent } from './material/material.component';
import { GearViewComponent } from './gear-view/gear-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GearComponent,
    ItemViewComponent,
    SetViewComponent,
    ShoppingListComponent,
    MaterialComponent,
    GearViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
