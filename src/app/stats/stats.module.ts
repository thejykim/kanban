import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { StatsRoutingModule } from './stats-routing.module';
import { SharedModule } from '../shared/shared.module';

// Material components
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

// Stats and graphs
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieTasksComponent } from './graphs/pie-tasks/pie-tasks.component';
import { NumberCardComponent } from './graphs/number-card/number-card.component';
import { LineHabitsComponent } from './graphs/line-habits/line-habits.component';
import { HabitsCardComponent } from './stats-page/habits-card/habits-card.component';
import { BasicCardComponent } from './stats-page/basic-card/basic-card.component';
import { StandardLineComponent } from './graphs/standard-line/standard-line.component';

@NgModule({
  declarations: [
    StatsPageComponent,
    PieTasksComponent,
    NumberCardComponent,
    LineHabitsComponent,
    HabitsCardComponent,
    BasicCardComponent,
    StandardLineComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    NgxChartsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule
  ]
})
export class StatsModule { }
