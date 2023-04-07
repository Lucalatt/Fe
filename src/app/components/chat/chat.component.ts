import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from 'src/app/auth/storage.service';
import { Messaggio } from 'src/app/models/message.interface';
import { Utente } from 'src/app/models/utente.interface';
import { MessaggiService } from 'src/app/services/messaggi.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messaggi: Messaggio[] | undefined;
  config: any;
  utenteLoggato: Utente | undefined;
  data: string | undefined;
  club: Utente | undefined;

  constructor(private ms: MessaggiService, private ss: StorageService, private us: UsersService, private ar: ActivatedRoute) { }

  ngOnInit(): void {


    this.getMessaggi();
    this.getData();
    this.getClub();
    this.getUtenteLoggato();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.messaggi?.length
    };

  }

  getUtenteLoggato(): void {
    let utenteLoggatoId = this.ss.getUser().id;
    this.us.getUtenteById(utenteLoggatoId).subscribe(resp => {
      this.utenteLoggato = resp
    })
  }

  getMessaggi(): void {
    this.getUtenteLoggato();
    this.ms.getMessaggi().subscribe(resp => {
      this.messaggi = resp.filter(messaggio => messaggio.club.id === this.club?.id && messaggio.utente.id === this.utenteLoggato?.id)
    })
  }

  getData(): void {
    const data: Date = new Date();
    let giorno: number = data.getDate();
    let mese: number = data.getMonth() + 1;
    let anno: number = data.getFullYear();

    this.data = `${giorno}/${mese}/${anno}`;
}

getClub(): void {
  let x = this.ar.snapshot.params["id"];
  this.us.getUtenteById(x).subscribe(resp => {
    this.club = resp;
    console.log(this.club);
  })
}


  inviaMessaggio(): void {
    this.getUtenteLoggato();
    const messaggioInput = document.getElementById('testo')as HTMLTextAreaElement;
    const messaggio = messaggioInput.value;
    let data = {
      data: this.data,
      messaggio: messaggio,
      utente: this.utenteLoggato,
      club: this.club
    }
    try {
      this.ms.addMessaggio(data).subscribe(resp =>
        messaggioInput.value = '' )
    } catch (error) {
      console.error(error);
    }

  }

}



