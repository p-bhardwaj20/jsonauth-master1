import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { QdashComponent } from './qdash/qdash.component';
import { IntqdataComponent } from './intqdata/intqdata.component';
import { ExtqdataComponent } from './extqdata/extqdata.component';
import { MatButtonModule } from '@angular/material/button';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { DxChartModule, DxPivotGridModule } from 'devextreme-angular';
import { Report4Component } from './report4/report4.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Report5Component } from './report5/report5.component';
import { Report6Component } from './report6/report6.component';
import { Report7Component } from './report7/report7.component';
import { Report8Component } from './report8/report8.component';
import { SharedModule } from './shared/shared.module';
import { NgToastModule } from 'ng-angular-popup';




@NgModule({
  declarations: [
    AppComponent,
    QdashComponent,
    IntqdataComponent,
    ExtqdataComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component,
    SignupComponent,
    LoginComponent,
    Report5Component,
    Report6Component,
    Report7Component,
    Report8Component
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatExpansionModule,
        MatMenuModule,
        FlexLayoutModule,
        DxPivotGridModule,
        DxChartModule,
        SharedModule,
        NgToastModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
