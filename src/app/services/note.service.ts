import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteType } from '../NoteType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'http://localhost:5000/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<NoteType[]> {
    return this.http.get<NoteType[]>(this.apiUrl);
  }

  deleteNotes(note: NoteType): Observable<NoteType> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<NoteType>(url);
  }

  updateReminders(note: NoteType): Observable<NoteType> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put<NoteType>(url, note, httpOptions);
  }
}
