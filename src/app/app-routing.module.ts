import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { SquadComponent } from '../app/squad/squad.component';
import { HistoryComponent } from '../app/history/history.component';
import { TropiesComponent } from '../app/tropies/tropies.component';
import { SquadDetailComponent } from '../app/squad/squad-detail/squad-detail.component';
import { HistoryAddComponent } from '../app/history/history-add/history-add.component';
import { TropiesAddComponent } from '../app/tropies/tropies-add/tropies-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'squad', component: SquadComponent, children: [
    {path: 'gk', children: [
      {path: ':id', component: SquadDetailComponent}
    ]},
    {path: 'def', children: [
      {path: ':id', component: SquadDetailComponent}
    ]},
    {path: 'mid', children: [
      {path: ':id', component: SquadDetailComponent}
    ]},
    {path: 'for', children: [
      {path: ':id', component: SquadDetailComponent}
    ]}
  ]},
  {path: 'history', component: HistoryComponent, children: [
    {path: 'action', component: HistoryAddComponent}
  ]},
  {path: 'tropies', component: TropiesComponent, children: [
    {path: 'action', component: TropiesAddComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
