import { Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'initial-page', pathMatch: 'full' },
  { path: 'initial-page', component: InitialPageComponent },
];
