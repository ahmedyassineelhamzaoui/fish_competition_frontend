import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private httpClient:HttpClient) { }

  addRanking(ranking:any){
    return this.httpClient.post(environment.apiURL+'ranking',ranking);
  }
}
