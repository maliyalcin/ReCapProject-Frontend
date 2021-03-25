import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentCar } from '../models/rentcar';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44375/api/rentcars/getrentcardetails"


  constructor(private httpClient:HttpClient) { }

  getRentals() : Observable<ListResponseModel<RentCar>> {
    return this.httpClient.get<ListResponseModel<RentCar>>(this.apiUrl)
  }
}
