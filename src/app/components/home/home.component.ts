import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/auth/storage.service';
import { Utente } from 'src/app/models/utente.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sub: Subscription | undefined;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userSrv: UsersService, private storageService: StorageService) { }

  ngOnInit(): void {

    if(this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  users: Utente[] = [];

}
