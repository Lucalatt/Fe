import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/auth/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: {username: string, password: string}): Observable<any> {
    return this.http.post(
      url,
      data,
      httpOptions
    );
  }

  register(data: {nome: string, cognome: string, username: string, email: string, password: string }): Observable<any> {
    return this.http.post(
      'http://localhost:8080/registrazioneUtente',
      data,
      httpOptions
    );
  }

  registerClub(data: {nome: string, username: string, sport: string, regione: string, citta: string, indirizzo: string, competizione: string, orari: string, email: string, password: string }): Observable<any> {
    return this.http.post(
      'http://localhost:8080/registrazioneClub',
      data,
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(url + 'signout', { }, httpOptions);
  }

}
