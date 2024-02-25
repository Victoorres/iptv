import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, CommonModule, MatGridListModule],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss',
})
export class InitialPageComponent {}
