import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PantryService {

  constructor(private httpClient:HttpClient) { }
  /**get all ingredients */
  getAllIngredients(){
    return this.httpClient.get(`${environment.APIURL}Ingrediants/GetAllIngrediants`)
  }
  
}
