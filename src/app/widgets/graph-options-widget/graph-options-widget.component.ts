import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
declare var pg: any;
declare let d3: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'graph-options-widget',
  templateUrl: './graph-options-widget.component.html',
  styleUrls: ['./graph-options-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphOptionsWidgetComponent implements OnInit, OnDestroy {
  nvd3LineData = [{
      'key': 'Site visits',
      'values': [
          [100, 0],
          [150, 8],
          [200, 20],
          [250, 22],
          [300, 30],
          [350, 26],
          [400, 10]
      ]
  }];
  nvd3LineOptions;
  timer;

  views = "14,256";
  today = "24";
  week = "56";

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.timer = setTimeout(() => {
    this.nvd3LineOptions = {
      chart: {
        type: 'lineChart',
        color: [
         ['#27cebc']
        ],
        x: function (d) { return d[0]; },
        y: function (d) { return d[1]; },
        useInteractiveGuideline: true,
        clipEdge: false,
        margin: {
          top: 10,
          right: -10,
          bottom: 10,
          left: -10
        },
        showLegend: false,
        showXAxis: false,
        showYAxis: false,
      }
    };
  }, 2000);
  }

}
