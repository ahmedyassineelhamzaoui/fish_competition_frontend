import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LevelComponent } from './modules/level/components/level/level.component';
import { CompetitionsComponent } from './modules/competition/components/competition/competition.component';
import { FishComponent } from './modules/fishs/components/fish/fish.component';
import { MemberComponent } from './modules/members/components/member/member.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LimitToPipe } from './pipe/limit-to.pipe';
import { FormsModule } from '@angular/forms';
import { AddCompetitionComponent } from './modules/competition/components/add-competition/add-competition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMemberComponent } from './modules/members/components/add-member/add-member.component';
import { AssignCompetitionComponent } from './modules/members/components/assign-competition/assign-competition.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RankingComponent } from './modules/ranking/components/ranking/ranking.component';
import { HuntingComponent } from './modules/hunting/components/hunting/hunting.component';
import { AddHuntingComponent } from './modules/hunting/components/add-hunting/add-hunting.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    CompetitionsComponent,
    FishComponent,
    MemberComponent,    
    LimitToPipe,
    AddCompetitionComponent,
    AddMemberComponent,
    RankingComponent,
    HuntingComponent,
    AddHuntingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule
    ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
