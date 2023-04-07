import { Utente } from "./utente.interface";

export interface Messaggio {
  data: string;
  messaggio: string;
  utente: Utente;
  club: Utente;
}
