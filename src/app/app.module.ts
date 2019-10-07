import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { DepartmentFormComponent } from './components/department/department-form/department-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routing: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'addEmployee', component: EmployeeFormComponent},
  { path: 'task', component: TaskComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DepartmentComponent,
    EmployeeComponent,
    DashboardComponent,
    TaskFormComponent,
    EmployeeFormComponent,
    DepartmentFormComponent,
    EmployeeDetailComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routing,
    ),
    [NgbModule],
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
