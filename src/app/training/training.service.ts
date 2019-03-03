import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@Injectable()
export class TrainingService{
    

constructor(private angularFireStore:AngularFirestoreModule){}

exerciseChanged=new Subject<Exercise>();

private availableExercises:Exercise[]=[
{id:'crunches',name:'Crunches',duration:30,calories:8},
{id:'touch-toes',name:'Touch Toes',duration:180,calories:11},
{id:'side-lunges',name:'Side Lunges',duration:120,calories:8},
{id:'burpees',name:'Burpees',duration:60,calories:8}
    ];

private runningExercise:Exercise;
private exercises:Exercise[]=[];

getAllExercises(){
    return this.availableExercises.slice();
}

startExercise(selectedId:string){
    console.log(selectedId);
    this.runningExercise=this.availableExercises.find(ex=>ex.id===selectedId);
    console.log(this.runningExercise);
    this.exerciseChanged.next({...this.runningExercise})
}

getRunningExercise()
{
    return {...this.runningExercise};
}

completeExercise(){
    this.exercises.push({...this.runningExercise,
                            date:new Date(),
                            state:'completed'});
    this.runningExercise=null;
    this.exerciseChanged.next(null);
}

cancelExercise(progress:number){
    this.exercises.push({...this.runningExercise,
        date:new Date(),
        duration:this.runningExercise.duration*(progress/100),
        calories:this.runningExercise.duration*(progress/100),
        state:'cancelled'});
    this.runningExercise=null;
    this.exerciseChanged.next(null);

}

getExecutedExercises()
{
    return this.exercises.slice();
}

}