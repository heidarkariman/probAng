import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Tool } from '../tool.model';
import { ToolsService } from '../tools.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-diagrams',
  templateUrl: 'tools-diagram.component.html',
  styleUrls: ['tools-diagram.component.css']
})
export class ToolsDiagramComponent implements OnInit, AfterViewInit {
  @Input() tool: Tool | undefined;
  @ViewChild('myCanvas', { static: false }) canvasRef: ElementRef<HTMLCanvasElement> | undefined;
  canvasWidth = 300;
  canvasHeight = 300;

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      this.tool = tools[0];
      if (this.canvasRef) {
        const ctx = this.canvasRef.nativeElement.getContext('2d');
        if (ctx) {
          const chart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: ['count', 'cposmax', 'cposmin', 'time', 'uposmax', 'uposmin'],
              datasets: [{
                label: '#',
                data: [this.tool.count, this.tool.cposmax, this.tool.cposmin, this.tool.time, this.tool.uposmax, this.tool.uposmin],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              plugins: {
                legend: {
                  position: 'chartArea',
                },
                title: {
                  display: true,
                  text: 'My Pie Chart'
                },
              }
            }
          });
        }
      }
    });
  }

  ngAfterViewInit() {
    // Not used for now
  }
}
