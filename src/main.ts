import { bootstrapApplication } from '@angular/platform-browser';
import { ListeNotesComponent } from './app/liste-notes/liste-notes.component';

bootstrapApplication(ListeNotesComponent)
  .catch(err => console.error(err));

