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
  selector: 'app-qdash',
  templateUrl: './qdash.component.html',
  styleUrls: ['./qdash.component.scss']
})
export class QdashComponent implements AfterViewInit {
  SideBarOpen = true  ;

  
  

  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid!: DxPivotGridComponent;

  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;

  pivotGridDataSource: any;

  

  constructor(private http:HttpClient) {
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = new PivotGridDataSource({
      // PivotGridDataSource is configured here
  });

  // Expands the second quarter of 2015 in the column area
  this.pivotGridDataSource.expandHeaderItem("column", [2021]);
   }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/atexis').subscribe(res=>{
      this.pivotGridDataSource=res
    })


   
   
  }

  ngAfterViewInit(): void {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });
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
