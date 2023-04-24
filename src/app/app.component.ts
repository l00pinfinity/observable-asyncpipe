import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  userData$: Observable<User[]> = this.userService.getUsers().pipe(take(1));

  constructor(private userService: UserService){}
}
