import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit {
  public activeBannerIndex: number = 0;

  public banners: string[] = [
    'assets/images/priston.png',
    'assets/images/banner.jpg',
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.webp',
    'assets/images/banner-3.jpg',
  ];
  
  public ngOnInit(): void {
    setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  public prevBanner(): void {
    this.activeBannerIndex = (this.activeBannerIndex - 1 + this.banners.length) % this.banners.length;
  }

  public nextBanner(): void {
    this.activeBannerIndex = (this.activeBannerIndex + 1) % this.banners.length;
  }
}
