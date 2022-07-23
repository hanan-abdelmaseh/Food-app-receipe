import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  constructor(private _Http:HttpClient) { }
  getAllReceipes(){
    //fake api this will changes
    //will change in environment
    return this._Http.get(`${environment.ApiUrl}/products`);
  }
}

