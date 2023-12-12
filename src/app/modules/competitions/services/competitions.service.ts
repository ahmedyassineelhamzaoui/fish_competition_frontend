import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

// singlton pattern is used here 
@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  constructor(private httpClient:HttpClient) { }

  getAllCompetitions(){
    return this.httpClient.get(environment.apiURL+'competitions');
  }
}
