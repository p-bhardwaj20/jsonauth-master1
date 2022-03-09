import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};

  Highcharts = Highcharts;

  

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          renderTo: 'container',
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 15,
              beta: 15,
              depth: 50,
              viewDistance: 25
          }
      },
      credits: {
        enabled: false
      },
      title: {
          text: '3D-Bar'
      },
      subtitle: {
          text: '3D visualisation'
      },
      plotOptions: {
          column: {
              depth: 25
          }
      },
      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  }

   HC_exporting(Highcharts);

   setTimeout(() => {
     window.dispatchEvent(
       new Event('resize')
     );
   }, 300);
  }
  
  }
  


