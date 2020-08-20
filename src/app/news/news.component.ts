import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
     data:any ;
  constructor(private service : NewsService) { }

  ngOnInit() {
    this.service.getPhotos().subscribe(response =>{
      this.data= response;
      console.log( this.data);
  })

  }

}