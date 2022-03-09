import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { BarComponent } from './widgets/bar/bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarsplitComponent } from './widgets/barsplit/barsplit.component';
import { LinesplitComponent } from './widgets/linesplit/linesplit.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [HeaderComponent,SidebarComponent,FooterComponent, AreaComponent, CardComponent, BarComponent, BarsplitComponent, LinesplitComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    NgApexchartsModule,
    HttpClientModule,
    NgToastModule
    
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, AreaComponent, CardComponent, BarComponent, BarsplitComponent, LinesplitComponent]
})
export class SharedModule { }
