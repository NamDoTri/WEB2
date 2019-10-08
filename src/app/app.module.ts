import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { DepartmentFormComponent } from './components/department/department-form/department-form.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { DepartmentDetailComponent } from './components/department/department-detail/department-detail.component';
import { TaskDetailComponent } from './components/task/task-detail/task-detail.component';

const routing: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'department', component: DepartmentComponent },
  { path: 'department-detail/:id', component: DepartmentDetailComponent},
  { path: 'addDepartment', component: DepartmentFormComponent},
  { path: 'updateDepartment/:id', component: DepartmentFormComponent},

  { path: 'employee', component: EmployeeComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent},
  { path: 'addEmployee', component: EmployeeFormComponent},
  { path: 'updateEmployee/:id', component: EmployeeFormComponent},

  { path: 'task', component: TaskComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent},
  { path: 'addTask', component: TaskFormComponent},
  { path: 'updateTask/:id', component: TaskFormComponent},

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
    DepartmentDetailComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routing,
    ),
    [NgbModule],
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
