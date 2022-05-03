import { Component, OnInit} from '@angular/core';
import {FetchdataService} from '../services/fetchdata.service';
import {Question,Option} from '../models/questions.model';

@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit{
  userName:string = "Singh";
  points:number = 0;
  currenIndex:number = 0;
  AllQuestion:Question[] = [];
  percentage:string = "0";
  subscribeTimer: any;
  interval:any;
  timeLeft:number = 10;
  totalAnswered:number = 0;

  constructor( private fetchdata:FetchdataService) { }
 
  ngOnInit(): void {
    this.LoadData();
    this.startTimer();
    this.userName =  localStorage.getItem('userName')??'Singh';
  }


  next(){
    this.currenIndex++;
    this.CalculatePercentage();
  }

  Previous(){
    this.currenIndex--;
    this.CalculatePercentage();
  }
  
  reset(){
    this.currenIndex = 0;
    this.CalculatePercentage();
    this.pauseTimer();
    this.startTimer();
    this.points = 0;
    this.totalAnswered=0;
  }

  LoadData(){
    this.fetchdata.FetchAllQuestions().subscribe(
      res=>{
        this.AllQuestion = res.questions;
      }
    )
  }

  CheckAnswer(data:Option){
    this.totalAnswered++;
    if(data.correct){
      this.points += 10;
    }else{
      this.points-= 10;
    }
    this.resetTimer(); // reset Timer
    setTimeout(()=>{
        this.next();
    },1000);
  }

  CalculatePercentage(){
    this.percentage = ((this.currenIndex/this.AllQuestion.length)*100).toString();
  }

  // Timer functions

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.next();
        this.points -= 10;
        this.timeLeft = 10; //reset timer
      }
      if(this.AllQuestion.length === this.currenIndex+1){ // clear interval after finish
        this.pauseTimer();
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft= 10;
  }

  resetTimer() {
    this.pauseTimer();
    this.startTimer();
  }

}
