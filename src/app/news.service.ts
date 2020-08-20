import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class NewsService {
 
    private url = "https://jsonplaceholder.typicode.com/photos"
  //  private url = "https://newsapi.org/v2/top-headlines -G \-d country=us \-d apiKey=ffc01129f8d84496a1ac3fc8bd48aeba"


  constructor(private http : HttpClient) { }

   getPhotos(){
    return this.http.get(this.url)

     }
  

}