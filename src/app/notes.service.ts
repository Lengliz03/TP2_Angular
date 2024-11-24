import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: any[] = []; // Propriété notes : tableau vide

  // Ajouter une note au tableau
  addNote(note: any): void {
    this.notes.push(note);
  }

  getNotes() {
    return JSON.parse(JSON.stringify(this.notes));
   }
}
