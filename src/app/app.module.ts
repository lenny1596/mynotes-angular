// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    NoteItemComponent,
    NotesComponent,
    AddNoteComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
