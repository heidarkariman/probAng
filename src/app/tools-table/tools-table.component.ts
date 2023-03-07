import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSort,MatSortHeader } from '@angular/material/sort';
import { ToolsService } from '../tools.service';
import { Tool } from '../tool.model';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-tools-table',
  templateUrl: './tools-table.component.html',
  styleUrls: ['./tools-table.component.css'],
})

export class ToolsTableComponent implements OnInit {
  tools: Tool[] = [];
  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  @ViewChild(MatSort) sort: MatSort=new MatSort;
  
  constructor(private toolsService: ToolsService) { }
  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      this.tools = tools;
      console.log(this.tools);
    });
  }

    sortData(sortColumn:string){
      this.toolsService.getSortedTools(sortColumn).subscribe((tools) => {
        this.tools = tools;
      });
    }

  loadData() {
    const sortDirection = this.sort.direction;
    const sortColumn = this.sort.active;
    this.toolsService.getSortedTools(sortColumn).subscribe((tools) => {
      this.tools = tools;
    });
  }
}
