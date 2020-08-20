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
  showList = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
   // this.inDateTime=new Date().toISOString().slice(0, 16); 
    
    this.data=this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); //whatever format you need. 
  
  }


onSubmit(form:any){
  //console.log(this.myDate);
    //console.log(x.value);
    // add to local storage
   // this.visitorData.push(JSON.stringify(this.data))
    form.value.date = this.data;

   this.showList.push(form.value)
    this.showList = this.showList.concat(JSON.parse(localStorage.getItem('logs')||'[]'));
    localStorage.setItem("logs", JSON.stringify(this.showList));

    // this.data=form.value
    // localStorage.setItem('logs',JSON.stringify(this.data))
    window.location.reload() 
    //form.resetForm();
  

}
}