import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  axis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  title: ApexTitleSubtitle
};



@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    chartData: any[] = [];
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: any;
    constructor(private zone: NgZone, private http: HttpClient) { };
    ngOnInit() {
      this.chartOptions = {
        series: [
          {
            name: "Net Profit",
            data: []
          }
        ],
        title: {
            text: "Internal RFT"
        },
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
            title: {
                text: "Month"
            },
          categories: []
        },
        yaxis: {
          title: {
            text: "RFT"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val: any) {
              return "" + val + "";
            }
          }
        }
      };
      this.getChartData();
  
    }
    async getChartData() {
      const chartData = await this.http.get<any>('https://run.mocky.io/v3/6c11409f-bc10-4fa1-9bcf-5440e24698a5').toPromise();
      const { data } = chartData;
      console.log(data);
      let Xaxis: any[] = [];
      let Yaxis: any[] = [];
      data.forEach((ele: any, i: any) => {
        Xaxis.push(ele.Month);
        Yaxis.push(Number(ele.RFT));
      });
      this.chartOptions.series = [{
        data: [...Yaxis]
      }]
      this.chartOptions.xaxis.categories.push(...Xaxis);
    }
    filterObject(objectPassed: any, filterArray: any[]) {
      return filterArray.reduce((acc, record) => (record in objectPassed && (acc[record] = objectPassed[record]), acc), {});
    }

}
