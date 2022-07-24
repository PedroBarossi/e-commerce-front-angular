import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormsComponent } from './components/search-forms/search-forms.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './pages/search/search.component';
import { AllComponent } from './pages/all/all.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormsComponent,
    SearchResultsComponent,
    FooterComponent,
    SearchComponent,
    AllComponent,
    FilterButtonComponent,
    AlbumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
