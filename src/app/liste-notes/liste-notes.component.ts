import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-liste-notes',
  standalone: true,
  imports: [FormsModule, NgFor], // Import FormsModule and NgFor
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css'],
  providers: [NotesService] // Provide the service locally
})
export class ListeNotesComponent {
  newNote: string = ''; // For the input field
  notes: any[] = []; // For displaying the notes

  constructor(private notesService: NotesService) {}

  addNote(): void {
    if (this.newNote.trim()) {
      this.notesService.addNote(this.newNote);
      this.newNote = ''; // Clear the input field
    }
  }

  showNotes(): void {
    this.notes = this.notesService.getNotes();
  }
}


