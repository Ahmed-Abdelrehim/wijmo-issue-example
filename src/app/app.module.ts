import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UnitsTableComponent } from './units-table/units-table.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
// import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
// import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridDetailModule } from '@grapecity/wijmo.angular2.grid.detail';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UnitsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridDetailModule,
    WjInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
