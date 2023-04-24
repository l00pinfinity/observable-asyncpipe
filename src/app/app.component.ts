import { Component } from '@angular/core';
import { Observable, catchError, ignoreElements, of, take } from 'rxjs';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  userData$: Observable<User[]> = this.userService.getUsers().pipe(take(1));

  userDataError$: Observable<{message:string}> = this.userData$.pipe(
    ignoreElements(), // means we only care about errors and completions
    catchError((err) => {
      return of(err);
    })
  );

  constructor(private userService: UserService) { }
}
