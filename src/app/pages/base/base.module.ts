import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { BasePageComponent } from './base.component';

@NgModule({
  declarations: [BasePageComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
})
export class BaseModule {}