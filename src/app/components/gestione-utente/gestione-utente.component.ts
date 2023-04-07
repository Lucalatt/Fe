import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/utente.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestione-utente',
  templateUrl: './gestione-utente.component.html',
  styleUrls: ['./gestione-utente.component.scss']
})
export class GestioneUtenteComponent implements OnInit {

  utente: User | undefined;

  constructor(private router: Router, private uSrv: UsersService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  update(form: NgForm) {
    let ut: Partial<User> = {
      nome: this.utente!.nome,
      username: this.utente!.username,
      email: this.utente!.email,
    }

    this.uSrv.updateUser(ut).subscribe((data) => {
      this.router.navigate(['/gestione-utente', ut.id]);
    })
  }

}
