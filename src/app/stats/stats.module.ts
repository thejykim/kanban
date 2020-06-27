import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { StatsRoutingModule } from './stats-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [StatsPageComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule
  ]
})
export class StatsModule { }
