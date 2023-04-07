import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Utente } from 'src/app/models/utente.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private usrSrv: UsersService) { }

  u: Utente | undefined;

  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    this.usrSrv.getUtenti().subscribe((users: Utente[]) => {
      this.u = users.find((element) => {
        if (x == element.id) {
          return true;
        } else {
          return false;
        }
      })
    }
    )
  }

}
