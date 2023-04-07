import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  utenti: Utente[] | undefined;
  config: any;
  ruoloConnesso: boolean | undefined;
  searchSport: string = "";
  searchRegione: string = "";
  searchCitta: string = "";
  searchCompetizione: string = "";
  constructor(private us: UsersService) { }

  ngOnInit(): void {

    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }

    this.getUtenti();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.utenti?.length
    };

  }

  getUtenti(): void {
    this.us.getUtenti().subscribe(resp => {
      this.utenti = resp.filter(utente => utente.competizione !== null);
      console.log(this.utenti);
    });
  }

  getSport(): void {
    const sportInput = document.getElementById('sport') as HTMLInputElement;

    const sport= sportInput.value;

    if (sport) {
        this.us.getUtentePerSport(sport).subscribe(resp => {
            if (resp.length > 0) {
                this.utenti = [];
                this.utenti = resp;
            }
        });
    } else {
        this.getUtenti();
    }
}

getRegione(): void {
  const regioneInput = document.getElementById('regione') as HTMLInputElement;

  const regione= regioneInput.value;

  if (regione) {
      this.us.getUtentePerRegione(regione).subscribe(resp => {
          if (resp.length > 0) {
              this.utenti = [];
              this.utenti = resp;
          }
      });
  } else {
      this.getUtenti();
  }
}

getCitta(): void {
  const cittaInput = document.getElementById('citta') as HTMLInputElement;

  const citta= cittaInput.value;

  if (citta) {
      this.us.getUtentePerCitta(citta).subscribe(resp => {
          if (resp.length > 0) {
              this.utenti = [];
              this.utenti = resp;
          }
      });
  } else {
      this.getUtenti();
  }
}

getCompetizione(): void {
  const competizioneInput = document.getElementById('competizione') as HTMLInputElement;

  const competizione= competizioneInput.value;

  if (competizione) {
      this.us.getUtentePerCompetizione(competizione).subscribe(resp => {
          if (resp.length > 0) {
              this.utenti = [];
              this.utenti = resp;
          }
      });
  } else {
      this.getUtenti();
  }
}

reset(): void {
  this.searchSport = '';
  this.searchCitta = '';
  this.searchCompetizione = '';
  this.searchRegione = '';
  this.getUtenti();
}



}
