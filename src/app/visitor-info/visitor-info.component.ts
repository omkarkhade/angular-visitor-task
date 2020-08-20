import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
   // this.inDateTime=new Date().toISOString().slice(0, 16); 
  }
onSubmit(form:any){
  //console.log(this.myDate);
    //console.log(x.value);
    // add to local storage
    this.data=form.value
   // this.visitorData.push(JSON.stringify(this.data))
   //this.visitorData.push(this.data)
    localStorage.setItem('logs',JSON.stringify(this.data))
    //form.resetForm();
  

}
}