import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteType } from 'src/app/NoteType';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddNote?: boolean;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddNote = value));
  }

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
