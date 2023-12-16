import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(private httpClient:HttpClient) { }

  getAllHuntigns() {
     return this.httpClient.get(environment.apiURL+'huntings');
  }
}
