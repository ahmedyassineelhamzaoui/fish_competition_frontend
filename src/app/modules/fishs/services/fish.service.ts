import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private httpClient:HttpClient) { }

  getAllFishes(){
    return this.httpClient.get(environment.apiURL+'fish');
  }
}
