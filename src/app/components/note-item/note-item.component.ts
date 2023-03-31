import { Component, Input, OnInit } from '@angular/core';
import { NoteType } from './../../NoteType';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent implements OnInit {
  @Input() noteItem!: NoteType;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}

//  "!" is for interface types and "?" is for unnamed types
