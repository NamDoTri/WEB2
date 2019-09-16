import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EmployeeComponent } from './employee/employee.component';
<<<<<<< src/app/app.module.ts
import { DepartmentComponent } from './department/department.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
>>>>>>> src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EmployeeComponent,
    DepartmentComponent
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
