import { Component, OnInit } from '@angular/core';
import { NoteType } from 'src/app/NoteType';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: NoteType[] = [];

  constructor(private noteservice: NoteService) {}

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe((Notes) => (this.notes = Notes));
  }

  addNote(note: NoteType): void {
    this.noteservice.addNotes(note).subscribe((note) => this.notes.push(note));
  }

  deleteNote(note: NoteType): void {
    this.noteservice
      .deleteNotes(note)
      .subscribe(
        () => (this.notes = this.notes.filter((t) => t.id !== note.id))
      );
  }

  toggleReminder(note: NoteType): void {
    note.reminder = !note.reminder;
    this.noteservice.updateReminders(note).subscribe();
  }
}
