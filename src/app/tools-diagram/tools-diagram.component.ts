import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild,ViewChildren,QueryList } from '@angular/core';
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
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChildren('myCanvas') canvasRefs!: QueryList<ElementRef>;


  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      tools.forEach(tool => {
        const ctx = this.canvasRef.nativeElement.getContext('2d');
        if (ctx) {
          const chart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: ['count', 'cposmax', 'cposmin', 'time', 'uposmax', 'uposmin'],
              datasets: [{
                label: '#',
                data: [tool.count, tool.cposmax, tool.cposmin, tool.time, tool.uposmax, tool.uposmin],
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
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Part nr: '+tool.tool_id
                },
              }
            }
          });
        }
          
      });
      
    });
  }

  ngAfterViewInit() {
    // Not used for now
  }
}
