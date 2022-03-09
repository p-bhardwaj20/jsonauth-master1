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
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;

  constructor(private http: HttpClient) {}
    
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "ProdA",
          type: "column",
          // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
          data:[]
        },
        {
          name: "ProdB",
          type: "line",
          // data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          data:[]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Production data"
      },    
        dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      xaxis: {
        type: "category",
        categories: []
      },
      yaxis: [
        {
          title: {
            text: "ProdA"
          }
        },
        {
          opposite: true,
          title: {
            text: "ProdB"
          }
        }
      ]
    };
    this.getChartData();
  }

  async getChartData() {
    const chartData = await this.http.get<any>('https://run.mocky.io/v3/b8d87e19-94cf-4098-bcf9-e5345305eda1').toPromise();
    const { Sheet1 } = chartData;
    console.log(Sheet1);
    let bar: any[] = [];
    let line: any[] = [];
    let dates: any[] =[];
    Sheet1.forEach((ele: any, i: any) => {
      bar.push(ele.ProdA);
      line.push(ele.ProdB);
      dates.push(ele.date);
    });
    this.chartOptions.series = [{
      data: [...bar]
    },{
      data: [...line]
    }],
    this.chartOptions.xaxis.categories.push(...dates);
  }
  filterObject(objectPassed: any, filterArray: any[]) {
    return filterArray.reduce((acc, record) => (record in objectPassed && (acc[record] = objectPassed[record]), acc), {});
  }


  elem = document.documentElement

  fullscreen() {
    if(this.elem.requestFullscreen){
      this.elem.requestFullscreen();
    }
  }
}


