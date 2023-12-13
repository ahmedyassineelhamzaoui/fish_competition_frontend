import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './errors/components/notfound/notfound.component';
import { CompetitionsComponent } from './modules/competition/components/competition/competition.component';
import { LevelComponent } from './modules/level/components/level/level.component';

const routes: Routes = [
  {path: 'competitions' , component: CompetitionsComponent},
  {path: 'levels' ,'component': LevelComponent},
  {path: '', redirectTo: '/competitions', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
