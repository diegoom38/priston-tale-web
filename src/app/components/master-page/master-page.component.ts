import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { InfoComponent } from "./components/info/info.component";

@Component({
  selector: 'app-master-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NewsComponent,
    CharactersComponent,
    MainCarouselComponent,
    MainCarouselComponent,
    InfoComponent
],
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
})
export default class MasterPageComponent {}
