import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteType } from 'src/app/NoteType';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  @Output() onAddNote = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a note!');
      return;
    }
    const newNote: NoteType = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddNote.emit(newNote);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
