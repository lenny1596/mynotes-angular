import { Component, OnInit } from '@angular/core';
import { NoteType } from 'src/app/NoteType';
import { Notes } from 'src/app/mock-notes';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  notes: NoteType[] = Notes;

  constructor() {}

  ngOnInit(): void {}
}
