import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-info',
  templateUrl: './visitor-info.component.html',
  styleUrls: ['./visitor-info.component.css']
})
export class VisitorInfoComponent implements OnInit {

  myDate= new Date();
  inDateTime=new Date();
  constructor() { }

  ngOnInit() {
   // this.inDateTime=new Date().toISOString().slice(0, 16); 
  }
onSubmit(x){
  //console.log(this.myDate);
    console.log(x.value);
    // add to local storage
    // localStorage.setItem('logs',JSON.stringify(x.value))
  

}
}