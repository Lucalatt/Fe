import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>('http://localhost:8080/utenti');
  }

  deleteUtente(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/utenti/${id}`);
  }

  addUtente(utente: any): Observable<Object> {
    return this.http.post('http://localhost:8080/utenti', utente);
  }

  updateUtente(utente: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/utenti/${utente.id}`, utente);
  }

  getUtenteByUtentename(utentename: any) {
    return this.http.get<Utente>('http://localhost:8080/utenti' + "/utente/getbyUtentename/" + utentename)
  }

  getUtenteById(id: number): Observable<Utente> {
    return this.http.get<Utente>(`http://localhost:8080/utenti/${id}`);
  }

  getUtentePerSport(sport: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaSport?sport=${sport}`);
  }

  getUtentePerCitta(citta: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaCitta?citta=${citta}`);
  }

  getUtentePerRegione(regione: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaRegione?regione=${regione}`);
  }

  getUtentePerCompetizione(competizione: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaCompetizione?competizione=${competizione}`);
  }
}
