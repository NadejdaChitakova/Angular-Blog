import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TableViewComponent } from './table-view/table-view.component';
import { CardListViewComponent } from './card-list-view/card-list-view.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TableViewComponent,
    CardListViewComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
