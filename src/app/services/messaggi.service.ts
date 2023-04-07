import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messaggio } from '../models/message.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessaggiService {

  constructor(private http: HttpClient) { }

  getMessaggi(): Observable<Messaggio[]> {
    return this.http.get<Messaggio[]>('http://localhost:8080/messaggi');
  }

  deleteMessaggio(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/messaggi/${id}`);
  }

  addMessaggio(messaggio: any): Observable<Object> {
    return this.http.post('http://localhost:8080/messaggi', messaggio);
  }

}
