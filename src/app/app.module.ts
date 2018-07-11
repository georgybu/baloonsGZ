import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CapturePageComponent } from './pages/capture-page/capture-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CapturePageComponent,
    MapPageComponent,
    CommentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
