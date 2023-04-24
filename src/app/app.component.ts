import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  userData$: Observable<User[]> = this.userService.getUsers().pipe(take(1));
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.subscription = this.userData$.subscribe((users:User[]) =>{
      this.users = users;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
