import { bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server';
import { ListeNotesComponent } from './app/liste-notes/liste-notes.component';
const bootstrap = () => bootstrapApplication(ListeNotesComponent, config);

export default bootstrap;
