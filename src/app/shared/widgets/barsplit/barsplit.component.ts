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
  selector: 'app-widget-barsplit',
  templateUrl: './barsplit.component.html',
  styleUrls: ['./barsplit.component.scss']
})
export class BarsplitComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;

  constructor(private http: HttpClient) {}
    
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "RFT",
          type: "column",
          data: []
        },
        {
          name: "WFT",
          type: "column",
          data: []
        },
        {
          name: "Percentage",
          type: "line",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: true
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "RFT and WFT",
        align: "left",
        offsetX: 110
      },
      xaxis: {
        categories: []
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#008FFB"
          },
          labels: {
            style: {
              color: "#008FFB"
            }
          },
          title: {
            text: "RFT",
            style: {
              color: "#008FFB"
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: "RFT",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#00E396"
          },
          labels: {
            style: {
              color: "#00E396"
            }
          },
          title: {
            text: "WFT",
            style: {
              color: "#00E396"
            }
          }
        },
        {
          seriesName: "WFT",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          labels: {
            style: {
              color: "#FEB019"
            }
          },
          title: {
            text: "Percentage",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    this.getChartData();
  }

  async getChartData() {
    const chartData = await this.http.get<any>('https://run.mocky.io/v3/b8d87e19-94cf-4098-bcf9-e5345305eda1').toPromise();
    const { Sheet1 } = chartData;
    console.log(Sheet1);
    let prodA: any[] = [];
    let prodB: any[] = [];
    let prodC: any[] = [];
    let dates: any[] = []
    Sheet1.forEach((ele: any, i: any) => {
      prodA.push(ele.ProdA);
      prodB.push(ele.ProdB);
      prodC.push(ele.ProdC)
      dates.push(ele.date)
    });
    this.chartOptions.series = [{
      data: [...prodA]
    },{
      data: [...prodB]
    },{
      data: [...prodC]
    }
      ]
    this.chartOptions.xaxis.categories.push(...dates);
  }
  filterObject(objectPassed: any, filterArray: any[]) {
    return filterArray.reduce((acc, record) => (record in objectPassed && (acc[record] = objectPassed[record]), acc), {});
  }


}
