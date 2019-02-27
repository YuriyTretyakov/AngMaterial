import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  allExercises:Exercise[] =[];

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.allExercises=this.trainingService.getAllExercises();
  }

  onStartTraining(form:NgForm)
  {
    console.log(form);
    this.trainingService.startExercise(form.value.exercise);
  }

}
