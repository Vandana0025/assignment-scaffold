import { Component, OnInit, } from '@angular/core';
import {MatButtonModule} from '@angular/material'
import { DatePipe } from '@angular/common';
import {FetchDataService } from 'src/app/fetch-data.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css'],
  providers: [DatePipe]
})
export class UserBarComponent implements OnInit {

  // User Details from API 
  username: any;
  position: any;
  total: number;
  approved: number;
  rejected: number;
  checked: boolean = true;

  // For Break Timer
  startTime: any;
  breakTime: any;
  currTime: any;

  constructor(public datepipe: DatePipe, private fetchdata: FetchDataService) {     
  }

  ngOnInit() {
    
    // Load Basic User Details
    this.fetchdata.getData('https://raw.githubusercontent.com/Vandana-25/vector25/master/userbardetails')
    .subscribe(data => {
      this.username = data.user;
      this.position = data.position;
      this.total = data.total;
      this.approved = data.approved;
      this.rejected = data.rejected;
    })

    this.startTime = new Date();
  }

  ngAfterViewChecked() {
    // this.resumeBreak(event);
    // this.resumeAvailable();
  }

  convertToTime(num){
    let minutes, seconds;
    minutes = num / 60;
    seconds = num % 60;

    return minutes+":"+seconds;

  }

  // Logic for Available Timer
  resumeAvailable(){

//     const numbers = interval(1000);

// const takeFourNumbers = numbers.pipe(take(10));

// takeFourNumbers.subscribe(x => console.log('Next: ', x));

    // const numbers = interval(1000);
    // const availableTimer = numbers.pipe(take(900));
    // availableTimer.subscribe(x => console.log(x));

    // setInterval(() => {
    //   this.available = this.convertToTime(this.availableSeconds);
    //   this.availableSeconds - 1;
    // },1000);
  }

  //Logic to set BreakTimer
  resumeBreak(event){
   // if(event.target.value) {
      // console.log("toggle event triggered");
      // setInterval(() => {
      //   this.currTime = new Date();
      //   this.breakTime = this.datepipe.transform((this.currTime - this.startTime, 'mm:ss'));
      // },1000);
  //  } 
  }
}
