import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-visitor-info',
  templateUrl: './visitor-info.component.html',
  styleUrls: ['./visitor-info.component.css']
})
export class VisitorInfoComponent implements OnInit {

  myDate= new Date();
  inDateTime=new Date();
  data:any;
  visitorData:string[]
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
   // this.inDateTime=new Date().toISOString().slice(0, 16); 
    
    this.data=this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); //whatever format you need. 
  
  }


onSubmit(form:any){
  //console.log(this.myDate);
    //console.log(x.value);
    // add to local storage
    form.value.date = this.data;
    this.data=form.value
   // this.visitorData.push(JSON.stringify(this.data))
   //this.visitorData.push(this.data)
    localStorage.setItem('logs',JSON.stringify(this.data))
    //form.resetForm();
  

}
}