import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Subject, from } from 'rxjs';
import { NgForm } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import{Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  allExercises:any[];
  availableExercicesChanged = new Subject<any[]>();

  constructor(private trainingService:TrainingService,private angularFireStore:AngularFirestore ) { 
   
  }

  ngOnInit() {
    
    this.angularFireStore.collection('availablesExercices')
    .snapshotChanges()
    .pipe(map( docArray => {
      return docArray.map( doc => {
        console.log(doc);
        return(
           {
           id: doc.payload.doc.id,
           name: doc.payload.doc.data()['name'],
           duration: doc.payload.doc.data()['duration'],
           calories: doc.payload.doc.data()['calories'],
         }
       
      );
      });
    }))
    .subscribe(exercices => {
      this.allExercises = exercices;
      this.availableExercicesChanged.next([...this.allExercises]);
    });
  }

  onStartTraining(form:NgForm)
  {
    console.log(form);
    this.trainingService.startExercise(form.value.exercise);
  }

}
