import { Component } from '@angular/core';
import { NoteType } from 'src/app/NoteType';
import { Notes } from 'src/app/mock-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: NoteType[] = Notes;
}
