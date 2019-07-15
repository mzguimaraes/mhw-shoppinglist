import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { SetViewComponent } from './set-view/set-view.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ItemComponent,
    ItemViewComponent,
    SetViewComponent,
    ShoppingListComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
