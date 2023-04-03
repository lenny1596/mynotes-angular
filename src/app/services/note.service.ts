import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteType } from '../NoteType';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  // this link refers to the json local db created that allows crud ops.
  private apiUrl = 'http://localhost:5000/notes';

  // these http headers are provided to be used with post, put & patch ops
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  // find all notes and display them
  getNotes(): Observable<NoteType[]> {
    return this.http.get<NoteType[]>(this.apiUrl);
  }

  // add new notes to db
  addNotes(note: NoteType): Observable<NoteType> {
    return this.http.post<NoteType>(this.apiUrl, note, this.httpOptions);
  }

  // update the reminder's boolean values
  updateReminders(note: NoteType): Observable<NoteType> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put<NoteType>(url, note, this.httpOptions);
  }

  // delete a note from db
  deleteNotes(note: NoteType): Observable<NoteType> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<NoteType>(url);
  }
}
