import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ArticleFirstComponent } from './article-first/article-first.component';
import { ArticleSecondComponent } from './article-second/article-second.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticleFirstComponent,
    ArticleSecondComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }