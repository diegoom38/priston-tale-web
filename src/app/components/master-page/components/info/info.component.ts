import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './components/info-card/info-card.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

}
