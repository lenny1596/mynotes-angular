import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NoteType } from '../NoteType';
import { Notes } from '../mock-notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  getNotes(): Observable<NoteType[]> {
    return of(Notes);
  }
}
