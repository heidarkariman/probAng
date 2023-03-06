import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  constructor(private http: HttpClient) {}

  getTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>('assets/tools.json');
  }

  getSortedTools(field: string): Observable<Tool[]> {
    return this.http.get<Tool[]>('assets/tools.json')
      .pipe(map((tools: Tool[]) => {
        return tools.sort((a:any, b:any) => {
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
      }));
  }
}