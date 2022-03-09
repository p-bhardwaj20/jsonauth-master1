import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtqdataComponent } from './extqdata/extqdata.component';
import { IntqdataComponent } from './intqdata/intqdata.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { QdashComponent } from './qdash/qdash.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { Report4Component } from './report4/report4.component';
import { Report5Component } from './report5/report5.component';
import { Report6Component } from './report6/report6.component';
import { Report7Component } from './report7/report7.component';
import { Report8Component } from './report8/report8.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component:DashboardComponent
  }, {path: 'posts',
      component: PostsComponent}],
      
},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent},
{path: 'qdash', component: QdashComponent},
{path: 'iq', component: IntqdataComponent},
{path: 'eq', component: ExtqdataComponent},
{path: 'r1', component: Report1Component},
{path: 'r2', component: Report2Component},
{path: 'r3', component: Report3Component},
{path: 'r4', component: Report4Component},
{path: 'r5', component: Report5Component},
{path: 'r6', component: Report6Component},
{path: 'r7', component: Report7Component},
{path: 'r8', component: Report8Component},
{path: 'reports', component: PostsComponent},
{path: 'homepage', component: DefaultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
