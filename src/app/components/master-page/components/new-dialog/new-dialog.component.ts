import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { New } from 'src/app/interfaces/new.interface';

@Component({
  selector: 'app-new-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss'],
})
export class NewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: New) {
    console.log(data);
  }
}
