import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {QuestionInterFace} from '../models/questions.model';
@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http: HttpClient) { }

  FetchAllQuestions(){
    return this.http.get<QuestionInterFace>('http://localhost:4200/assets/questions.json');
  }
}
