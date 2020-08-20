import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VisitorInfoComponent } from './visitor-info/visitor-info.component';
import { RouterModule } from '@angular/router';
import { VisitorGridComponent } from './visitor-grid/visitor-grid.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsService } from './news.service';
import { DatePipe } from '@angular/common';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot([
    // {path:'', component:AppComponent},
    {path:'', component:VisitorInfoComponent },
     {path:'visitor-info', component:VisitorInfoComponent },
    {path:'visitorgrid', component:VisitorGridComponent},
    {path:'news', component:NewsComponent}



  ]) ],
  declarations: [ AppComponent, HelloComponent, VisitorInfoComponent, VisitorGridComponent, NewsComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsService, DatePipe]
})
export class AppModule { }
