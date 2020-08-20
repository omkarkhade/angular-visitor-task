import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class NewsService {
 
  private url = "https://jsonplaceholder.typicode.com/photos"

  constructor(private http : HttpClient) { }

   getPhotos(){
    return this.http.get(this.url)

     }
  

}