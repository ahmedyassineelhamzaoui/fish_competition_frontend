import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishsComponent } from './modules/fishs/components/fishs/fishs.component';
import { LevelsComponent } from './modules/levels/components/levels/levels.component';
import { MembersComponent } from './modules/members/components/members/members.component';
import { CompetitionsComponent } from './modules/competitions/components/competitions/competitions.component';
import { NotfoundComponent } from './errors/components/notfound/notfound.component';

const routes: Routes = [
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'fishs', component: FishsComponent},
  {path: 'levels', component: LevelsComponent},
  {path: 'members', component: MembersComponent},
  {path: '', redirectTo: '/competitions', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
