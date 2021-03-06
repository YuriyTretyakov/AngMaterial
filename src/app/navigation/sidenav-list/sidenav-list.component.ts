import { Component, OnInit,EventEmitter,Output,OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();
  isAuth:boolean=false;
  authSubscription:Subscription;

  constructor(private authService:AuthService) { }

  onClose()   {
    this.closeSidenav.emit();
  }

  ngOnDestroy()
  {
    this.authSubscription.unsubscribe();
  }

  onLogout()
  {
    this.onClose();
    this.authService.logout();
  }

  ngOnInit() {
    this.authSubscription=this.authService.authChange.subscribe(    authStatus=>{
      this.isAuth=authStatus;
  })
  }

}
