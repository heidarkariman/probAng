import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsTableComponent } from './tools-table/tools-table.component';
import { ToolsDiagramComponent } from './tools-diagram/tools-diagram.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tools-table', component: ToolsTableComponent },
  { path: 'tools-diagram', component: ToolsDiagramComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
