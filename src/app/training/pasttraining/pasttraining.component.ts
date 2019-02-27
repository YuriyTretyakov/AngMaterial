import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource,MatSort, MatPaginator } from '@angular/material';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-pasttraining',
  templateUrl: './pasttraining.component.html',
  styleUrls: ['./pasttraining.component.css']
})
export class PasttrainingComponent implements OnInit,AfterViewInit {
  
  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
  }

 displayedColumns=['date','name','duration','calories','state'];
 dataSource= new MatTableDataSource<Exercise>();
  
 @ViewChild(MatSort) sort:MatSort;
 @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private trainingService :TrainingService) { }

  ngOnInit() {
    //this.dataSource.data=this.trainingService.getExecutedExercises();
    this.dataSource.data=this.trainingService.getExecutedExercises();
    this.dataSource.paginator=this.paginator;
  }

  doFilter(value:string)
  {
    this.dataSource.filter=value.trim() .toLowerCase();
  }

}
