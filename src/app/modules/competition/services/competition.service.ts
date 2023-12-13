import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private httpClient:HttpClient) { }

  getAllCompetitions(){
    return this.httpClient.get(environment.apiURL +'competitions');
  }
}
