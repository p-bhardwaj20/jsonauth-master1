import { HttpClient } from '@angular/common/http';
import {
  NgModule, Component, ViewChild, AfterViewInit, enableProdMode, OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxPivotGridModule,
  DxPivotGridComponent,
  DxChartModule,
  DxChartComponent,
} from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-report8',
  templateUrl: './report8.component.html',
  styleUrls: ['./report8.component.scss']
})
export class Report8Component implements AfterViewInit {
  SideBarOpen = true;

  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid!: DxPivotGridComponent;

  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;

  pivotGridDataSource: any;

  constructor(private http:HttpClient) {
    this.customizeTooltip = this.customizeTooltip.bind(this);
   }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/atexis4').subscribe(res=>{
      this.pivotGridDataSource=res
    })
  }

  ngAfterViewInit(): void {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });

    setTimeout(() => {
      const dataSource = this.pivotGrid.instance.getDataSource();
      // dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2022]);
    }, 0);
  }

  customizeTooltip(args: any) {
    return {
      html: `${args.seriesName} | Total<div class='currency'>${args.valueText}</div>`,
    };
  }

  sideBarToggler() {
    this.SideBarOpen = !this.SideBarOpen
   }
}
