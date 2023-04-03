import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteType } from './../../NoteType';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent implements OnInit {
  @Input() noteItem!: NoteType;
  @Output() onDeleteNote = new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(noteItem: NoteType): void {
    this.onDeleteNote.emit(noteItem);
  }

  onToggle(noteItem: NoteType): void {
    this.onToggleReminder.emit(noteItem);
  }
}

//  "!" is for interface types and "?" is for unnamed types
