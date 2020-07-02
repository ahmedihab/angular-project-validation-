import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public _HttpClient:HttpClient) {

   }

   getHomeData()
   {
     return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
   }
}
